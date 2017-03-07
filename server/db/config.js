var Promise = require('bluebird');

module.exports = function(db) {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  // Create links table
  return db.queryAsync('CREATE TABLE IF NOT EXISTS links (\
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
    url VARCHAR(255),\
    baseUrl VARCHAR(255),\
    code VARCHAR(5),\
    title VARCHAR(255),\
    visits INT NOT NULL DEFAULT 0,\
    timestamp TIMESTAMP\
    );')
  .then(function() {
    // Create clicks table
    return db.queryAsync('CREATE TABLE IF NOT EXISTS clicks (\
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
      linkId INT,\
      timestamp TIMESTAMP\
      );');
  })
  .then(function() {
    return db.queryAsync('CREATE TABLE IF NOT EXISTS users (\
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
      username VARCHAR(16) NOT NULL UNIQUE,\
      password VARCHAR(40) NOT NULL,\
      timestamp TIMESTAMP\
      );');
  })
  /************************************************************/
  /*          Add additional schema queries here              */
  /************************************************************/

  .error(function(err) {
    console.log(err);
  });
};


// -- ---
// -- Globals
// -- ---

// -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
// -- SET FOREIGN_KEY_CHECKS=0;

// -- ---
// -- Table 'users'
// -- 
// -- ---

// DROP TABLE IF EXISTS `users`;
    
// CREATE TABLE `users` (
//   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
//   `name` VARCHAR(16) NULL DEFAULT NULL,
//   `password` VARCHAR(40) NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// -- ---
// -- Table 'Sessions'
// -- 
// -- ---

// DROP TABLE IF EXISTS `Sessions`;
    
// CREATE TABLE `Sessions` (
//   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
//   `timestamp` TIMESTAMP NULL DEFAULT NULL,
//   `user_id` INT NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// -- ---
// -- Table 'Links'
// -- 
// -- ---

// DROP TABLE IF EXISTS `Links`;
    
// CREATE TABLE `Links` (
//   `id` INTEGER(40) NULL AUTO_INCREMENT DEFAULT NULL,
//   `url` VARCHAR(255) NULL DEFAULT NULL,
//   `baseUrl` VARCHAR(255) NULL DEFAULT NULL,
//   `code` VARCHAR(5) NULL DEFAULT NULL,
//   `title` VARCHAR(255) NULL DEFAULT NULL,
//   `visits` INTEGER NOT NULL DEFAULT 0,
//   `timestamp` TIMESTAMP NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// -- ---
// -- Table 'Users_Links'
// -- 
// -- ---

// DROP TABLE IF EXISTS `Users_Links`;
    
// CREATE TABLE `Users_Links` (
//   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
//   `user_id` INTEGER(20) NULL DEFAULT NULL,
//   `link_id` INTEGER(40) NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// );

// -- ---
// -- Foreign Keys 
// -- ---

// ALTER TABLE `Sessions` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
// ALTER TABLE `Users_Links` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
// ALTER TABLE `Users_Links` ADD FOREIGN KEY (link_id) REFERENCES `Links` (`id`);

// -- ---
// -- Table Properties
// -- ---

// -- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
// -- ALTER TABLE `Sessions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
// -- ALTER TABLE `Links` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
// -- ALTER TABLE `Users_Links` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

// -- ---
// -- Test Data
// -- ---

// -- INSERT INTO `users` (`id`,`name`,`password`) VALUES
// -- ('','','');
// -- INSERT INTO `Sessions` (`id`,`timestamp`,`user_id`) VALUES
// -- ('','','');
// -- INSERT INTO `Links` (`id`,`url`,`baseUrl`,`code`,`title`,`visits`,`timestamp`) VALUES
// -- ('','','','','','','');
// -- INSERT INTO `Users_Links` (`id`,`user_id`,`link_id`) VALUES
// -- ('','','');