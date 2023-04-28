const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, require:true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    fname: {type:String, default: 'not set'},
    lname: {type: String, default: 'not set'},
    age: {type: Number, default: 18},
    // photoUrl: {type: String},
    type: {type: String, require: true, default: true},
    role: {type: String, require: true, enum: ['seller', 'customer']},
    token: { type: String }
});

module.exports = mongoose.model("user", userSchema);