
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {title: 'admin'},
        {title: 'takmir'},
        {title: 'jamaah'},
      ]);
    });
};
