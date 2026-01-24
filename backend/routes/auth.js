const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.js');

// Helper to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Register a new User
router.post('/register', async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({
            $or: [{ phoneNumber }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this phone or email already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const newUser = new User({
            name,
            email,
            phoneNumber,
            password: hashedPassword,
            designation: 'owner'
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully.",
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id)
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
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