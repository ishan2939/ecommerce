const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	/*images: {
		type: String,
		required: true,
	},*/
	description: {
		type: String,
		required: true,
	},
	/*productRating: {
		type: Number,
		min: 0,
		max: 5,
		default: 3,
	},*/
	price: {
		type: Number,//float nakhvu hoy to su karvanu
		required: true
	},
	// productCategory: {
	// 	type: String,
	// 	enum: ["appliance", "grocery", "clothing"],
	// 	required: true,
	// },
	quantity: {
		type: Number,
		required: true
	},
	short_desc: {
		type: String,
		required: true
	},
	cart_id: {
		type:String
	},
	seller_id: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("product", productSchema);
