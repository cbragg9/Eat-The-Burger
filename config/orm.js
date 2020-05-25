// Import MySQL connection.
var connection = require("../config/connection.js");

// ORM will make SQL queries and callback results to Model

var orm = {
    // CRUD: Read
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // CRUD: Create
    insertOne: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols})`;
        queryString += ` VALUES ('${vals}')`;

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // CRUD: Update
    updateOne: function (table, colVals, condition, cb) {
        var queryString = `UPDATE ${table}`;
        queryString += ` SET ${colVals}`;
        queryString += ` WHERE ${condition}`;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;