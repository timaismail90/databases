const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

const famousPerson = process.argv[2];

client.connect();

function Results(err, results) {
    console.log(results.rows);
}

function findFamousPersonByName(famousPerson, callback) {
    client.query(`SELECT * FROM famous_people
    WHERE first_name = $1::text`, [famousPerson], callback);
}

// function close() {
//     client.end();
// }

return findFamousPersonByName(famousPerson, Results)

client.end();



// client.connect((err) => {
//     if (err) {
//         return console.error("Connection Error", err);
//     }
//     client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//         if (err) {
//             return console.error("error running query", err);
//         }
//         console.log(result.rows[0].number); //output: 1
//         client.end();
//     });
// });