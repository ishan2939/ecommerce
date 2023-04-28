const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {

    try{
        const {fullName, email, password, role} = req.body;

        if(!(fullName && email && password && role)){
            return res.status(400).send("Not sufficient data provided.");
        }
        
        const ifUserExists = await User.findOne({ email : email.toLowerCase() });
        if(ifUserExists){
            return res.status(409).json({
                message: "Email address is in use, please try a different one"
            });
        }

        encryptedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name: fullName,
            email:  email.toLowerCase(),
            password: encryptedPassword,
            role: role
        });

        const token = jwt.sign(
            {data: user},
            'JSJSJS',
            {
                expiresIn: "2h"
            }
        )


        res.status(201).json({
            data: user,
            token: token,
            message: "Successfully registered"
        });
    }
    catch(err){
        res.status(400).json({
            data: err.message,
            message: "Something went wrong, please try again"
        });
    }
}   