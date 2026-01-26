const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};


router.post('/register', async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;
        const existingUser = await User.findOne({
            $or: [{ phoneNumber }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this phone or email already exists." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);



        const newUser = new User({
            owner_name: name,
            email,
            phone: phoneNumber,
            password_hash: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully.",
            _id: newUser._id,
            owner_name: newUser.owner_name,
            email: newUser.email,
            token: generateToken(newUser._id)
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { identifier, password } = req.body; // 'identifier' can be email or phone

        // Check for user by email OR phone
        const user = await User.findOne({
            $or: [{ email: identifier }, { phone: identifier }]
        });

        if (user && (await bcrypt.compare(password, user.password_hash))) {
            res.json({
                _id: user._id,
                owner_name: user.owner_name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;