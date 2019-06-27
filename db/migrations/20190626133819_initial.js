exports.up = function(knex) {
  return Promise.all([

    // knex.schema.createTable('brightest_stars', table => {
    //   table.string('name').primary();
    //   table.string('object_type');
    //   table.string('magnitude');
    //   table.string('bv_color');
    //   table.string('right_asc');
    //   table.string('declination');
    //   table.string('distance');
    //   table.string('prop_motion_speed');
    //   table.string('prop_motion_ang');
    //   table.string('absolute_mag');
    //   table.timestamps(true, true);
    // }),
    
    knex.schema.createTable('constellations', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('mythology');
      table.string('first_appeared');
      table.string('genitive_form');
      // table.string('brightest_star');
      // table.foreign('brightest_star').references('brightest_stars.name');
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
    // knex.schema.dropTable('brightest_stars')
  ]);
};