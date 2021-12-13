const express = require('express');

const productsRouter = require('./products');

const router = express.Router();

router.use('/products', productsRouter);

router.get('/', (req, res) => {
  res.json({ message: 'test api index' });
});

module.exports = router;