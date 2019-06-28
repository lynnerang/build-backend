exports.up = function(knex) {
  return Promise.all([
    
    knex.schema.createTable('constellations', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('mythology');
      table.string('first_appeared');
      table.string('genitive_form');
      table.string('brightest_star');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('stars', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('magnitude');
      table.string('link');
      table.integer('constellation_id').unsigned();
      table.foreign('constellation_id').references('constellations.id');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('stars'),
    knex.schema.dropTable('constellations')
  ]);
};