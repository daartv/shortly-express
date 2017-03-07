var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

module.exports = {
  // signup = {

  // }
  POST: function (params, callback) {
    console.log( "I want to know!!! ====>", params, callback);
    var queryStr = 'INSERT IGNORE INTO users SET ?';
    db.query(queryStr, params, function (err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
