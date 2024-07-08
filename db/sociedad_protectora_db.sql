-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sociedad_protectora_db
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `adopciones`
--

DROP TABLE IF EXISTS `adopciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adopciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `animal_id` int DEFAULT NULL,
  `fecha_adopcion` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `animal_id` (`animal_id`),
  CONSTRAINT `adopciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `adopciones_ibfk_2` FOREIGN KEY (`animal_id`) REFERENCES `animales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adopciones`
--

LOCK TABLES `adopciones` WRITE;
/*!40000 ALTER TABLE `adopciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `adopciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animales`
--

DROP TABLE IF EXISTS `animales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `especie` varchar(50) DEFAULT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `edad` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `fecha_ingreso` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animales`
--

LOCK TABLES `animales` WRITE;
/*!40000 ALTER TABLE `animales` DISABLE KEYS */;
INSERT INTO `animales` VALUES (1,'NINA','canino','mestizo','2 meses','Cachorra en adopción. Porte mediano/grande. Esta bebe fue abandonada en una zona de sobrepoblación, actualmente unos vecinos le acercan comida ,pero no puede estar solita y corriendo peligro. Es una cachorra muy dulce .','2029-06-24'),(2,'BLANQUITO','felino','mestizo','50 días','Gatito en adopción. Se debe tener extremo cuidado con la exposición del sol ya que son propensos al cáncer en orejitas y nariz si no se los cuida. Es una gatita dulce y juguetona que disfruta de la compañía humana. Necesita un hogar y mucho cariño.','2020-03-24'),(3,'NEGRITO','canino','mestizo','5 años','Super compañero, va con vos a todos lados. No hace ruido alguno, especial para departamento. Come alimento y lo que sea que le des, no es exquisito. Le gusta mucho jugar con otros perros. Es porte pequeño a mediano. Duerme en cualquier rinconcito.','2010-06-24'),(4,'HAZEL','canino','mestizo','6 años','Es viejita, de tamaño mediano y tiene un tumor en el pecho, esta bajo tratamiento. A pesar de su condición, sigue siendo una perrita cariñosa y leal. Necesita un hogar donde puedan darle la atención médica que requiere y mucho amor.','2002-04-24'),(5,'GARDFIELD','felino','mestizo','25 días','Gatito en adopción responsable. Compromiso de castración y seguimiento. Se requiere un compromiso especial para alimentarlo y mantenerlo caliente, ya que es muy pequeño. Será un compañero leal y agradecido','2029-06-24'),(6,'GRETA','canino','mestizo','8 años','Perrita de porte pequeño. Es mimoso, juguetón y adora que lo acaricien. Hace sus necesidades afuera y se lleva bien con otros perritos. Está vacunada y lista para encontrar una familia que la llene de amor. Es perfecta para cualquier hogar.','2015-01-24'),(7,'GATITOS','felino','mestizo','10 dias','Estos cuatro gatitos, con cinco dias de nacidos necesitan adoptantes y mucho cuidado. Su mamá falleció, dejándolos vulnerables. Requieren alimentación especial y cuidados constantes para asegurar su completo bienestar.','2028-06-24'),(8,'TIGRE','felino','mestizo','5 años','Este hermoso minino fue abandonado hace tres años por las personas que tanto queria, se mudaron y él quedo solito sin saber que paso. Recientemente los vecinos lo curaron de una infeccion que tenia en el cuello. Es muy cariñoso y compañero.','2025-04-24');
/*!40000 ALTER TABLE `animales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `fecha` date DEFAULT NULL,
  `lugar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Cristina Guevara','cris@cris.com','12345','2020-07-29 03:00:00'),(3,'Micaela Aranibar','mica@mica.com','12345','2021-04-02 03:00:00'),(4,'Cecilia Cruz','ceci@ceci.com','12345','2023-08-21 03:00:00');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01  2:28:32
