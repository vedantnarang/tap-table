const express = require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');
const restaurant = require('../models/restaurant.js');


router.post('/register', async (req, res) => {
    try {
        const {
            restrauntName,
            ownerName,
            phoneNumber,
            email,
            password,
            totalTables
        } = req.body;

        const existingUser = await restaurant.findOne({
            $or: [{ phoneNumber }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this phone or email already exists." });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newRestaurant = new restaurant({
            restaurantName: restrauntName,
            ownerName,
            phoneNumber,
            email,
            password: hashedPassword,
            totalTables: totalTables || 2,
        });

        await newRestaurant.save();

        res.status(201).json({ message: "Success! Restaurant registered." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;