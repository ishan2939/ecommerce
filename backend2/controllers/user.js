const User = require('../model/user');
const bcrypt = require('bcryptjs');

exports.get_all_users = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json(err);
    }
};

exports.update_user = async (req, res, next) => {
    const userId = req.params.id;
    const { fullName, username, email, password } = req.body;

    try {
        const user = await User.find({ _id: userId });

        if (user) {
            if (fullName === user.fullName && username === user.username && email === user.email && password === user.password) {
                return res.status(400).json({ message: "No new data has been provided" });
            }

            const newUser = {
                fullName: fullName,
                username: username,
                email: email,
                password: await bcrypt.hash(password,10)
            }
            const updatedUser = await User.findByIdAndUpdate(userId, newUser, { new: true, runValidators: true });

            return res.status(200).json({
                message: "User details have been successfully updated",
                data: updatedUser
            });
        }
        else {
            return res.status(400).json({ message: "Wrong credentials, please try again" });
        }
    }
    catch (err) {
        return res.status(400).json({
            data: err.message,
            message: "Something went wrong, please try again"
        });
    }
};

