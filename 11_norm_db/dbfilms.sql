-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: films
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(22) NOT NULL DEFAULT '',
  `surname` varchar(22) NOT NULL DEFAULT '',
  `born` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Marilyn','Monroe','Norma Jeane Mortenson June 1, 1926 Los Angeles, California, U.S.'),(2,'Charles','Spencer','Charles Spencer Chaplin Jr. 16 April 1889 London, England');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors_tfilms`
--

DROP TABLE IF EXISTS `actors_tfilms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors_tfilms` (
  `id_actors` int NOT NULL,
  `id_films` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors_tfilms`
--

LOCK TABLES `actors_tfilms` WRITE;
/*!40000 ALTER TABLE `actors_tfilms` DISABLE KEYS */;
INSERT INTO `actors_tfilms` VALUES (1,1),(1,2),(2,3),(2,4);
/*!40000 ALTER TABLE `actors_tfilms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tdirectors`
--

DROP TABLE IF EXISTS `tdirectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tdirectors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `director` varchar(22) NOT NULL DEFAULT '',
  `list_films` varchar(255) NOT NULL DEFAULT '',
  `born` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tdirectors`
--

LOCK TABLES `tdirectors` WRITE;
/*!40000 ALTER TABLE `tdirectors` DISABLE KEYS */;
INSERT INTO `tdirectors` VALUES (1,'Charles Spencer','The Gold Rush, A Woman of the Sea','Charles Spencer Chaplin Jr. 16 April 1889 London, England'),(2,'Samuel Wilder','Some Like It Hot, The apartment','Samuel Wilder June 22, 1906 Sucha, Austria-Hungary (now Sucha Beskidzka, Poland)');
/*!40000 ALTER TABLE `tdirectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tfilms`
--

DROP TABLE IF EXISTS `tfilms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tfilms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(24) NOT NULL DEFAULT '',
  `director` varchar(22) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tfilms`
--

LOCK TABLES `tfilms` WRITE;
/*!40000 ALTER TABLE `tfilms` DISABLE KEYS */;
INSERT INTO `tfilms` VALUES (1,'Some Like It Hot','Samuel Wilder'),(2,'The apartment','Samuel Wilder'),(3,'The Gold Rush','Charles Spencer'),(4,'A Woman of the Sea','Charles Spencer');
/*!40000 ALTER TABLE `tfilms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-02 14:13:14
