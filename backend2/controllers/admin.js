const Product = require('../model/product');
const orderDetail = require('../model/orderdetails');
const User = require('../model/user');

exports.get_my_products = async (req, res) => {
    try {
        const seller_id = req.query.sellerid;
        // console.log(req.query);
        const products = await Product.find({ seller_id: seller_id });

        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ response: false, error: err.message });
    }

}

exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.body.id)
        res.status(200).json({ response: true, product: product })
    } catch (err) {
        res.status(500).json({ response: false, error: err.message })
    }
}

exports.getMyOrders = async(req, res) => {
    try{
        const seller_id = req.body.seller_id;
        let response = [], obj={};
        const orders = await orderDetail.find();
        
        for(o of orders){
            const user = await User.findById(o.user_id);
            for(p of o.products){
                obj = {};
                const pdetails = await Product.findById(p.p_id);
    
                if(pdetails.seller_id == seller_id){
                    obj.user = user.username;
                    obj.quantity = p.ordered_quantity;
                    obj.p_name =  pdetails.title;
                    response.push(obj);                  
                }
            }
        }
        res.status(200).send(response);
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
}