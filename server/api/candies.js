const router = require('express').Router();
const { Candy } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (error) {
    next(error);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleCandy = await Candy.findByPk(req.params.id);
    res.json(singleCandy);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
