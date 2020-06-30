const mysql = require("mysql");

// const conn = mysql.createConnection({
//     host:"localhost",
//     port: 3306,
//     user: "root",
//     password: "Biggie92#@!*",
//     database: "burgers_db"
// });
const conn = mysql.createConnection({
    CLEARDB_DATABASE_URL: "mysql://bd63f616e45530:d4f09c32@us-cdbr-east-02.cleardb.com/heroku_f5d05644ad099ad?reconnect=true",
});

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected`);
  }
});

module.exports = conn;
