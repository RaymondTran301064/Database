USE art_db;

DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `art`;

CREATE TABLE `users` (
  id int(11) NOT NULL auto_increment,
  name varchar(255) NOT NULL,
  # Assuming SHA256 hash
  hashed_password char(64) NOT NULL,
  # Assuming 16 chars in salt
  salt char(16) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `art` (
  id int(11) NOT NULL auto_increment,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price  int(255) NOT NULL,
  category varchar(255) NOT NULL,
  size varchar(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;