-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "storages" -------------------------------------
CREATE TABLE `storages`( 
	`id` Int( 0 ) AUTO_INCREMENT NOT NULL,
	`url` MediumText CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`filename` MediumText CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
	`createdAt` DateTime NOT NULL,
	`updatedAt` DateTime NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "tracks" ---------------------------------------
CREATE TABLE `tracks`( 
	`id` Int( 0 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`album` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`cover` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`artist_name` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`artist_nickname` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`artist_nationality` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
	`duration_start` Int( 0 ) NOT NULL DEFAULT 0,
	`duration_end` Int( 0 ) NOT NULL DEFAULT 0,
	`mediaId` Int( 0 ) NOT NULL DEFAULT 0,
	`createdAt` DateTime NULL DEFAULT NULL,
	`updatedAt` DateTime NULL DEFAULT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "users" ----------------------------------------
CREATE TABLE `users`( 
	`id` Int( 0 ) AUTO_INCREMENT NOT NULL,
	`name` VarChar( 50 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
	`email` VarChar( 50 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
	`password` VarChar( 150 ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
	`role` Enum( 'user', 'admin' ) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'user',
	`age` Int( 0 ) NULL DEFAULT NULL,
	`createdAt` DateTime NULL DEFAULT NULL,
	`updatedAt` DateTime NULL DEFAULT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = latin1
COLLATE = latin1_swedish_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- Dump data of "storages" ---------------------------------
BEGIN;

INSERT INTO `storages`(`id`,`url`,`filename`,`createdAt`,`updatedAt`) VALUES 
( '2', 'http://localhost:3001/file-1664885847635.png', 'file-1664885847635.png', '2022-10-04 12:17:27', '2022-10-04 12:17:27' );
COMMIT;
-- ---------------------------------------------------------


-- Dump data of "tracks" -----------------------------------
BEGIN;

INSERT INTO `tracks`(`id`,`name`,`album`,`cover`,`artist_name`,`artist_nickname`,`artist_nationality`,`duration_start`,`duration_end`,`mediaId`,`createdAt`,`updatedAt`) VALUES 
( '1', 'Nat 6', 'Album Nat', 'http://tttt.com', '0', '0', '0', '0', '0', '2', '2022-10-04 12:18:38', '2022-10-04 13:21:29' );
COMMIT;
-- ---------------------------------------------------------


-- Dump data of "users" ------------------------------------
BEGIN;

INSERT INTO `users`(`id`,`name`,`email`,`password`,`role`,`age`,`createdAt`,`updatedAt`) VALUES 
( '2', 'Paola Montaño', 'pao@test.com', '$2a$10$EjIV3912SfcgDW.p.grCGOgN8A21QlrlDZWGaGQ/4KsDQHKwknWiu', 'user', '29', '2022-10-04 13:39:38', '2022-10-04 13:39:38' );
COMMIT;
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


