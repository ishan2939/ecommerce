const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {type: String, require: true}
});

module.exports = mongoose.model("category", categorySchema);