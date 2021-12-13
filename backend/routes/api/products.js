const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const db = require('../../db/models');
const { Product } = db;
const { handleValidationErrors } = require('../../utils/validation');

const productNotFoundError = (id) => {
  const err = new Error(`Product with an id of ${id} could not be found.`);
  err.title = 'Product not found.';
  err.status = 404;
  return err;
}

const router = express.Router();

router.get(
  '/', 
  asyncHandler(async (req, res) => {
    const products = await Product.findAll();
    res.json({ products });
  }),
);

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(productNotFoundError(productId));
    }
    res.json({ product });
  }),
);

const productValidation = [
  check('image')
    .exists({ checkFalsy: true })
    .withMessage('Image is required.'),
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Name is required.'),
  check('price')
    .exists({ checkFalsy: true })
    .withMessage('Price is required.'),
  handleValidationErrors,
];

router.post(
  '/',
  productValidation,
  asyncHandler(async (req, res) => {
    const { image, name, price } = req.body;
    const product = await Product.create({ image, name, price });
    res.json({ product });
  }),
);

router.put(
  '/:id(\\d+)',
  productValidation,
  asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id, 10);
    const { image, name, price } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(productNotFoundError(productId));
    }
    await product.update({ image, name, price });
    res.json({ product });
  }),
);

router.delete(
  '/:id(\\d+)', 
  asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    if (!product) {
      return next(productNotFoundError(productId));
    }
    await product.destroy();
    res.status(204).end();
  }),
);

module.exports = router;