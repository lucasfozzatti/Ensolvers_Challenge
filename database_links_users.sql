CREATE DATABASE  IF NOT EXISTS `database_links` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `database_links`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: database_links
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'Lucas','$2b$10$dnGXnCBlGM2CbXiRovNL8OijkzavTDuKwd47FYZQhVklyAefW9Kmq'),(15,'Lucas','$2b$10$dSioo8Oniai7p0NA4MuSXeOv/bnXXJxW4Q2DouAyv82x85FrCX0Lm'),(16,'Lucas','$2b$10$gs2fJbhi9T3di8TuIZUTIugYqjb7J8Pc3/L1ASO4BlRazx1jfD.Na'),(17,'Lucas','$2b$10$OJNuwvKt.3gSGBHnO/nTY.yjlCIcA1tWYpNRZ8vSH81n5v3HeF.ZS'),(18,'Google','$2b$10$QlVZSlFjCRQiOp/i/Os5o.dLPuPEXAlUm8So4fXVRvJDKyhE595se'),(19,'Juan','$2b$10$6xmui64OCVurKr4L5Ob/weV8DZzw8lBi0isHFPAysnnA3FG0FL6j.'),(20,'Agustin','$2b$10$weqpuHQfvjvTeJMvtPFiVeKExcbp5qkrB1orfE4Zq.MhvifqsS9hK'),(21,'Elton','$2b$10$7mbZnsLlwfBeEorZwBICNu2/XYFqCXL.cTjL5mfQG5m.iHG4d.XoW'),(22,'Agus','$2b$10$eUx.6llgsrYW5bd/SoiWG.goaYrCDieOHvMCW9.m0iWM68qDiJOQi'),(23,'Marco','$2b$10$ko/6ZfzSDYhNf9eKN7xPGOZJe2K/p4gg50rly9qM7W6/rPwJ2fXhm'),(24,'dasdsad','$2b$10$Pgt9/sMQqbzsY8/KTwDGje6Kq1aMnoAaYdf63GYIkHppPTHgAZ3jS'),(25,'fdgfdg','$2b$10$b1xynd26bxPJFrBWdIiO7uD/FL4ed4M84b3.sa7ZI6Evlx83QIviy'),(26,'gfdgfd','$2b$10$1yTNiIYEdgLepmHiz46CguXF/ckOfmDECvUOzhz5Y96d8V.ijwaGq'),(27,'jonas','$2b$10$/CX5h.uNdVpN8uZ6ZfYNdOEUaVsLDXztIJAytHDE3d5n5y0UGc6vK'),(28,'Elias','$2b$10$R32QSXWrW3Je9SISkz9LwOo5Yt5ira15qJbUyTSHc8OHx70Z/rvcS'),(29,'','$2b$10$EcY4C3PSh0IkG.r.PhA1ZeI89SIVleJSGeM3UXlaqJKamaHF0AUJW'),(30,'','$2b$10$A1RydKmt5FHGlFOEFqIZoODu4bs4Nh.44ztHKT8US0Qj0E0KgsT7y'),(31,'','$2b$10$78yQiwdbOYwd0r09UrZNCerTScM5dBwf/91SixrzdZdSxVFWVwtXS'),(32,'safsafsaf','$2b$10$Z/qKW8EPpMNcd/QG8x/Ra.4.c20evMs2hTgCgTvYX7eStvk8bFKve'),(33,'Anto','$2b$10$Rd3dYfbR14Q5xmL43uNHzO9KhukRyw1cKApDrFB4Wpr4sRmaX56ke'),(34,'Pelado','$2b$10$eMYHAfsqtOxfdOGACBoFGOzF0hsfbARNXbo/K5zCA9FR9X61FuFY2'),(35,'Google','$2b$10$cYCkU/i4tGEJm5q7eaxvOeNkgm5VNpn252EySqoTw7d5qH9HrOx0m'),(36,'Google','$2b$10$ZaDEphn6fRMmRlAOrQVkIuq/5rxQHbrbHmHeaWZuJ8CCpxHEXiAfu'),(37,'Google','$2b$10$VqiSk8SPzr/0OAp0nXizDub94T9uRdhwKq2Q/dGvpLGZz6Z8h5Ie2'),(38,'jonny','$2b$10$fi1/lTjS8fjAo5/e1.MI3OBBtfI48/V9RP3GIA7R9XbnyRjWnrKRG'),(39,'jonny','$2b$10$BwZXawwX0/iD3iG5ugAK9O8AZqiUdU1gFMiwbl8nVGEly9WP.fkpu'),(40,'Jack','$2b$10$vdefH1Zn55JDuZ2FvR27YOtR/x9EiTXGxD0K5vPd2mtb9b8Q0We.e'),(41,'Jake','$2b$10$yUN8VYEZ7KsVOgJ0ztt0qustEITF0lW3OWkbuDsHnh0SVFDiovE1S'),(42,'Agus','$2b$10$B4t3Nx3uISA5ONcfUSqjVOanUaRLHqT02F34wttlZ832SfYWmCNQC'),(43,'Agus','$2b$10$dZQHc2l8DWrsPsx51KzWA.xvYxvT1.bBIfkDSNbnSDL8COOGYODri'),(44,'Agus','$2b$10$DRvxduC83qweK0SZu0Dk6u4zhjXxY6KuNJOb31W9vkXfNtrjUuWkO'),(45,'Agus','$2b$10$PIfcA2/yeqZben7x0HgTcOb8DX4wszA6sm.SapAj6QaO0QH12N9fy'),(46,'Agus','$2b$10$BYxqVUf6R8Y5NaSkZ3ssCuLQaltE8Yl.Ug8bhiSiUU6YYm6vLfNw.'),(47,'Agus','$2b$10$oVPHemMPJvNP6NuRfvkkOO/4xTwBUjJcKT9vTNHHgw5MGQjXkQl.i'),(48,'Agus','$2b$10$oFrh9NnjyLxEVDPUBmPbveCa2u2aGRyFCSQmHEfG4gyrYW0IB7UqS'),(49,'Jackk','$2b$10$DNNWBBSfQcB1yWvpWocw2uUwBvr37FqT2Lc0EZaC.t5HMPsjW4HAi'),(50,'hola','$2b$10$Kx2VvLIUEV/QlQske5QMz.e9rlTA6j4N/R4/Tg0YyP6cYIIOEVzh6'),(51,'Agus','$2b$10$avNrc0//kaqzpPKssiOem.s5CUZYxQ08Z264S3uCb5zoi4/ccFqE6'),(52,'Hola','$2b$10$/dFtjGLs1OLtcDNCUtMTcuUteqU.V6oXGaTs.xwK7husygG5jtmXm'),(53,'Jorge','$2b$10$sY0AWaUJleMW/W5qDAsl3eviTeUlqkBsRZQxtocuo8N/VtNcMQDHK'),(54,'Jorge','$2b$10$eSYtLuxLMfw1lHeixomeIuagCykHcPnbsxbkSkz5V1DGTHJC4yU2G'),(55,'Jorge','$2b$10$uAYhEajAkvSaEb1v5T4s3uhPhzGd0mSRqZIwj6L3EzscbucSv8hLO'),(56,'Jorge','$2b$10$Wf.utHknt.s2D9w.InCSseyV0ic.uyccKLq1nyFBt14a4J.yfDvOK'),(57,'Jorge','$2b$10$DVptwKTurHy6opjB7mHrI.DkFx2LGhgSEv4N.yiYKvqP//XfXTqwi'),(58,'User','$2b$10$ASeyaQUZ9070YXJr7sqjAO6GoGkDq4GusyFwN4Km84vF2.ZmzVw0e');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-13 21:07:47
