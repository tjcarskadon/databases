CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(140) NOT NULL,
  `id_User` INTEGER NOT NULL,
  `id_Rooms` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

    
CREATE TABLE `User` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`)
);


    
CREATE TABLE `Rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Name` (`Name`)
);


-- CREATE TABLE user (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(40) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id INT NOT NULL AUTO_INCREMENT,
--   text VARCHAR(140) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (id)
--     REFERENCES user(id)
-- );


-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   id INT NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(40) NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (id)
--     REFERENCES messages(id)
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

