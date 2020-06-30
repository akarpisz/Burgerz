const conn = require("./connection.js");

const qMarks = (count) => {
  const arr = [];

  for (var i = 0; i < count; i++) {
    arr.push("?");
  }

  return arr.toString();
};

const convToSql = (object) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in object) {
    var value = object[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(object, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr;
};

const orm = {
  selectAll: function (table, cb) {
    let q = "SELECT * FROM " + table + ";";
    console.log(q);

    conn.query(q, function (err, data) {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },
  insertOne: function (table, columns, values, cb) {
    let q = "INSERT INTO " + table;
    q += "(";
    q += columns.toString();
    q += ") VALUES (";
    q += qMarks(values.length);
    q += ")";
    console.log(q);
    console.log(values.length);

    conn.query(q, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  updateOne: function (table, columnValuesObj, condition, cb) {
    let q = "UPDATE " + table + " SET ";
    q += convToSql(columnValuesObj).toString();
    q += " WHERE " + condition + ";";

    console.log(q);

    conn.query(q, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
};

module.exports = orm;
