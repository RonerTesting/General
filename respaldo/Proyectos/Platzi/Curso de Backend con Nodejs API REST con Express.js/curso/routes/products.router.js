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

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  if(newProduct){
    res.status(201).json(newProduct);
  }
  else{
    res.status(404).json({
      message: 'not found',
    });
  }

});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message:error.message
    });

  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
