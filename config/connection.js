const mysql = require("mysql");


const conn = mysql.createConnection({
    CLEARDB_DATABASE_URL: "mysql://bd63f616e45530:d4f09c32@us-cdbr-east-02.cleardb.com/heroku_f5d05644ad099ad?reconnect=true",
});

// const conn = mysql.createConnection({
//   host     : 'us-cdbr-east-02.cleardb.com',
//   user     : 'bd63f616e45530',
//   password : 'd4f09c32',
//   database : 'heroku_f5d05644ad099ad'
// });

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected`);
  }
});

module.exports = conn;
