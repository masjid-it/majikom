exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'hadihammurabi@gmail.com', password: '928fa5021d901d1f802e5d18c00a0e0ea3c762471266e6e29acbea66bec3d4bd', role_id: 1},
      ]);
    });
};
