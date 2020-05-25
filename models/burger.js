var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
    orm.create("burgers", "name", vals, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update("burgers", "devoured = true", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;