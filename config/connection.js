const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  const conn = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Biggie92#@!*",
    port: 3306,
    database: "burgers_db"
  })
}

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected`);
  }
});

module.exports = conn;
