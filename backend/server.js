const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const shippingRoutes = require('./routes/shippingRoutes.js');
const chatbotRoutes = require('./routes/chatbotRoutes.js');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URI,
  credentials: true
}));

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GlobalConnect Backend API is Running 🚀"
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/chatbot', chatbotRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});