var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

module.exports = {
  POST: function (params, callback) {
    params.password = utils.encryptPassword(params.password);
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
