const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();

connectDB();

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.send("backend running");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});