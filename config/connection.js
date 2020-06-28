const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "Biggie92#@!*",
    database: "burgers_db"
});

conn.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log(`Connected on port ${conn.config.port}`);
})

module.exports = conn;