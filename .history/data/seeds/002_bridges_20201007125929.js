const seedData = require('../seedData')
console.log(seedData)
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bridges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bridges').insert([seed]);
    });
};
