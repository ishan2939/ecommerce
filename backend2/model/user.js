const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {type: String, require: true, enum: ['seller', 'customer']},
    token: { type: String }
})

module.exports = mongoose.model("user", userSchema);