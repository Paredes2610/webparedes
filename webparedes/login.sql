-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2025 a las 22:57:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contraseña`) VALUES
(7, 'paredes', '$2y$10$6eFUHHXF6KzbKaVASYzxp.ym1gmHHaRURi.5TFltL.zsK1Vr/XtqG'),
(8, 'Felipe', '$2y$10$4vuqwB3AnuG.FBbNXxAaGuxuo88nP.q69BB6q2ksiBSE5wiPbUFEq'),
(9, 'lulita', '$2y$10$2yf19xIy5bkSCHrt8w07quHvOtHEupFkTrYIg9dIBltm1BsOk0ArO'),
(10, 'PAREDESSSS', '$2y$10$SkXAgyIQ87wCsXal.JmkHeag0QOEI.Jerp09R5nq4d53tgQH1eCsm'),
(11, 'PAREDESS', '$2y$10$4O.PDVrKYzDV35YExE8PKem2vKDmwN5IwCE74Rr1eQdldnE0R0fSy'),
(12, 'PAREDESSSS', '$2y$10$w/8OedMMHZ3dvzMM0DIB0ewyot7qf8pAfowOwm/.0d4CxQ36jnLr2'),
(13, 'PAREDESSSS', '$2y$10$3qOJavrJvuUsLDd9tJpkEeRGwvEx4L9gD2XBBX7F4MnQgPDse.fL2'),
(14, 'PAREDESSSS', '$2y$10$XX5XyYcbLurnC0Sqsex32er5M.pc6DUKvePe8U3Al6RmW0QFA7bi6'),
(15, 'PAREDESSSS', '$2y$10$MiwzZTxo2F.JKavVkWbRz.BAIRT7KparORYKqPhreomDeYpC6i6VC'),
(16, 'PAREDESSSS', '$2y$10$h7QtCJLXRZw8k/GvKoTZ6.BFHBaks0fjw2KfJhNUBMgOmHsu9KifC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
