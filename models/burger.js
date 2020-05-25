var orm = require("../config/orm.js");

// Controller calls model functions which will pass data to ORM, then callback results to Controller

var burger = {
    // CRUD: Read
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // CRUD: Create
    create: function (vals, cb) {
        orm.create("burgers", "name", vals, function (res) {
            cb(res);
        });
    },

    // CRUD: Update
    update: function (condition, cb) {
        orm.update("burgers", "devoured = true", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;