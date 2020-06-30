const mysql = require("mysql");

// const conn = mysql.createConnection({
//     host:"localhost",
//     port: 3306,
//     user: "root",
//     password: "Biggie92#@!*",
//     database: "burgers_db"
// });
const conn = mysql.createConnection({
    CLEARDB_DATABASE_URL: "mysql://b8344c639e654e:de2a9277@us-cdbr-east-02.cleardb.com/heroku_d6bd77eacbb0dc8?reconnect=true"
});

conn.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log(`Connected on port ${conn.config.port}`);
})

module.exports = conn;