const express = require('express');
const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();
router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(201).json(products);
});

router.get('/filter', async (req, res) => {
  res.send('Yo soy un filter');
});
router.get('/:id', async (req, res,next) => {
  try {
    let { id } = req.params;
    const product = await service.findOne(id)
    console.log(product);
    if (product) {
      res.status(201).json(product);
    } else {
      res.status(404).json({
        message: 'not found',
      });
    }

  } catch (error) {
    next(error);
  }
});



module.exports = router;
