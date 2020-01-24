const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipeId) {
  return db.select('i.ingredient_name', 'ri.ingredient_quantity')
    .from('ingredients as i')
    .join('recipes_ingredients as ri', 'ri.ingredient_id', 'i.id')
    .where('ri.recipe_id', recipeId)
}

function getInstructions(recipeId) {
  return db('steps').where('recipe_id', recipeId);
}

//getRecipes(): should return a list of all recipes in the database.
//getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
//getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe