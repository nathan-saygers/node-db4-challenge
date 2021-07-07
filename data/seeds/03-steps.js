
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: '1', step_number: '1', instructions: 'spin the dough around'},
        {id: 2, recipe_id: '1', step_number: '2', instructions: 'spread pizza sauce on dough'},
        {id: 3, recipe_id: '1', step_number: '3', instructions: 'stick that bad boi in the oven'},
        {id: 4, recipe_id: '1', step_number: '4', instructions: 'wait 15 minutes'},
        {id: 5, recipe_id: '1', step_number: '5', instructions: 'pull that sucker out'}
      ]);
};
