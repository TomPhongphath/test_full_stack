const express = require('express');
const cors = require('cors');
const app = express();
const port = 3200;  // แก้พอร์ตให้ตรงกับที่ใน frontend

app.use(cors());

// ใช้ require เพื่อโหลดไฟล์ JSON
const products = require('./product.json');  // แก้ไขตรงนี้เป็นการใช้ require อย่างถูกต้อง

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:sku', (req, res) => {
  const product = products.find(p => p.sku === req.params.sku);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
