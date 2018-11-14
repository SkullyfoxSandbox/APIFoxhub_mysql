exports.up = async function(knex) {
    await knex.schema.createTable("users", table => {
        table.increments().primary();
        table.string("email").notNullable();
        table.string("username").notNullable();
        table.integer("discord_id").notNullable();
        table.string("password").notNullable();
        table.string("avatar_url").nullable();

        table.timestamps(true, true);
        table.unique("email");
        table.index(["username"]);
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users");
};
