
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_id: 2, ingredient_id: 5, colName: '2 cups'},
        {id: 2, recipe_id: 2, ingredient_id: 3, colName: '1 cup'},
        {id: 3, recipe_id: 2, ingredient_id: 2, colName: '2 cups'}
      ]);
    });
};
