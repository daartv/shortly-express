var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

module.exports = {
  POST: function (params, res) {
    params.password = utils.encryptPassword(params.password);
    var queryStr = `INSERT INTO users(username, password) VALUES ('${params.username}', '${params.password}');`;
    db.queryAsync(queryStr)
      .then(function () {
        // console.log(params);
        res.redirect('/');
      })
      .catch(function (err) {
        res.redirect('/signup');
      });
      // if (err) {
      //   console.log('IT ERRORS OUT FROM USER', err);
      //   // callback(err, null);
      // } else {
      //   // var queryStr = `SELECT ${params.username} FROM users`;
      //   // if (db.query(queryStr) === params.username) {
      //   //   console.log('The error is here');
      //   //   callback(err, res.redirect(301, '/signup'));
      //   // }
      //   console.log('THERE WAS NO ERROR');
      //   console.log(db.query('SELECT username from users where username = ' + params.username + ';'));
      //   //check database for the username the request is trying to add
      //   //if inside db,
      //     //redirect
      //   //else,
      //     //create the username
      //   callback(null, results);
      // }
    // });
  }
};
