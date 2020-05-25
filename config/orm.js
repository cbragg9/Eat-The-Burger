// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols})`;
        queryString += ` VALUES ('${vals}')`;

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function(table, colVals, condition, cb) {
        var queryString = `UPDATE ${table}`;
        queryString += ` SET ${colVals}`;
        queryString += ` WHERE ${condition}`;

        console.log(queryString);
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

module.exports = orm;