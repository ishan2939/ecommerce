const Product = require('../model/product');

exports.get_my_products = async (req, res) => {
    try {
        const seller_id = req.query.sellerid;
        // console.log(req.query);
        const products = await Product.find({ seller_id: seller_id });

        res.status(200).json(products);
    }
    catch(err){
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