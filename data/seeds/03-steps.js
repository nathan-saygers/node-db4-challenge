
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_id: '1', step_number: '1', instructions: 'spin the dough around'},
        {id: 1, recipe_id: '1', step_number: '2', instructions: 'spread pizza sauce on dough'},
        {id: 1, recipe_id: '1', step_number: '3', instructions: 'stick that bad boi in the oven'},
        {id: 1, recipe_id: '1', step_number: '4', instructions: 'wait 15 minutes'},
        {id: 1, recipe_id: '1', step_number: '5', instructions: 'pull that sucker out'}
      ]);
    });
};
