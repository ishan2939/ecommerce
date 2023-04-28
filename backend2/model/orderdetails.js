const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_id: {type: String, require: true},
    product_id: {type: String, require: true},
    quantity: {type: Number, require: true}
});

module.exports = mongoose.model("orderDetails", orderSchema);