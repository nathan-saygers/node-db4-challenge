const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    console.log(recipes)
    res.status(200).json(recipes)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
  Recipes.getShoppingList(id)
  .then(list => {
    console.log(list)
    res.status(200).json(list)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
})

router.get('/:id/instructions', (req, res) => {
  const id = req.params.id;
  
  Recipes.getInstructions(id)
  .then(instructions => {
    console.log(instructions)
    res.status(200).json(instructions)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
})

module.exports = router;