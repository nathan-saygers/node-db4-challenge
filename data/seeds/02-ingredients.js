
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'butter'},
        {id: 2, ingredient_name: 'milk'},
        {id: 3, ingredient_name: 'sugar'},
        {id: 4, ingredient_name: 'rice'},
        {id: 5, ingredient_name: 'flour'},
        {id: 6, ingredient_name: 'beans'},
        {id: 7, ingredient_name: 'salt'},
      ]);
};
