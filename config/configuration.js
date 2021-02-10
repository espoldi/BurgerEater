var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_MARIA_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_DB"
    });
}

connection.connect(function (err) {
    if (err) {
        console.log("error connecting");
    }
    console.log("connected");
});

module.exports = connection;