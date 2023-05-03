const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {

    try{
        const {fullName, username, email, password, age, role} = req.body;
        console.log(req.body);

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
            fullName: fullName,
            username: username,
            email:  email.toLowerCase(),
            password: encryptedPassword,
            age: age,
            role: role
        });

        const token = jwt.sign(
            {data: user},
            'auth-token',
            {
                expiresIn: "2d"
            }
        )


        res.status(201).json({
            data: user,
            token: token,
            message: "Successfully registered"
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            data: err.message,
            message: "Something went wrong, please try again"
        });
    }
}   