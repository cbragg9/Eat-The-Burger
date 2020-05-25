var orm = require("../config/orm.js");

// Controller calls model functions which will pass data to ORM, then callback results to Controller

var burger = {
    // CRUD: Read
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // CRUD: Create
    insertOne: function (vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function (res) {
            cb(res);
        });
    },

    // CRUD: Update
    updateOne: function (condition, cb) {
        orm.updateOne("burgers", "devoured = true", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;