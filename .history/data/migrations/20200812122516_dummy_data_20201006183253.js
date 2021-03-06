exports.up = (knex) => {
  return knex.schema.createTable('bridges', function (table) {
    table.integer('project_code').notNullable().unique();
    table.string('province');
    table.string('district');
    table.string('sector');
    table.string('cell');
    table.string('bridge_site_name');
    table.string('project_stage');
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('district_id');
    table.string('district_name');
    table.integer('province_id');
    table.string('province_name');
    table.string('project_stage');
    table.integer('individuals_served');
    table.string('bridge_image_before');
    table.string('bridge_image_after');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('bridges');
};
