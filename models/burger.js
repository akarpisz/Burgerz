const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
  addBurger: function (columns, values, cb) {
    orm.insertOne("burgers", columns, values, function (result) {
      cb(result);
    });
  },
  update: function (columnValuesObj, condition, cb) {
    try {
      orm.updateOne("burgers", columnValuesObj, condition, function (result) {
        cb(result);
      });
    } catch (err) {
      throw err;
    }
  },
};

module.exports = burger;
