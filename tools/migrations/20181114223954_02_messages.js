exports.up = async function(knex) {
    await knex.schema.createTable("messages", table => {
        table.increments().primary();
        table.string("discord_id").notNullable();
        table.string("message").notNullable();

        table.timestamps(true, true);
        table.index(["discord_id"]);
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("messages");
};
