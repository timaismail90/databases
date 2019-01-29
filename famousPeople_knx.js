const settings = require("./settings");

var knex = require('knex')({
    client: 'pg',
    connection: {
        user: settings.user,
        password: settings.password,
        database: settings.database,
        host: settings.hostname,
        port: settings.port,
        ssl: settings.ssl
    }
});

// const famousPerson = process.argv[2];

// client.connect();


knex.select('first_name').from('famous_people')
    .asCallback(function(err, rows) {
        if (err) return console.error(err);
        console.log(rows);
    });


// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'your_database_user',
//         password: 'your_database_password',
//         database: 'test_db'
//     }
// });