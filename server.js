const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

const products = require('./productsData');

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/checkout', (req, res) => {
  console.log("Order received:", req.body.cart);
  res.json({ message: "Order received successfully!" });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
