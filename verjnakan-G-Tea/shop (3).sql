-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 05 2022 г., 17:51
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

DELIMITER $$
--
-- Процедуры
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `myproc` ()  BEGIN
    DECLARE i int DEFAULT 0;
    WHILE i < 5 DO
        INSERT INTO promocode (value, discount) VALUES (45, 6);
        SET i = i + 1;
    END WHILE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `imgBig` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img_1` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img_2` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` int NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `cpu_model` varchar(255) NOT NULL,
  `ram_size` varchar(50) NOT NULL,
  `graphic_card` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `graphic_card_ram` varchar(50) NOT NULL,
  `hard_disk` varchar(255) NOT NULL,
  `oc` varchar(50) NOT NULL,
  `product_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `product`
--

INSERT INTO `product` (`id`, `imgBig`, `img_1`, `img_2`, `name`, `price`, `brand`, `model`, `cpu_model`, `ram_size`, `graphic_card`, `graphic_card_ram`, `hard_disk`, `oc`, `product_description`) VALUES
(1, 'https://m.media-amazon.com/images/I/61EZazyxnpL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/513bTAFvvcL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61PCahZq8EL._AC_SX679_.jpg', 'MEK Hero G1 A5938V2 Gaming Desktop', 3299, 'ZOTAC', 'G1 A5938V2', 'AMD Ryzen 9 5950X 16-Core/32-Thread Processor', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3080', '12 GB', '2TB NVMe SSD', 'Windows 11', 'Gaming Desktop Powered by ZOTAC AMD Ryzen 9 5950X 16-Core/32-Thread Processor, 32GB ARGB 3200MHz DDR4, NVIDIA GeForce RTX 3080 12GB, 2TB M.2 NVMe SSD, WiFi + Bluetooth, Windows 11'),
(2, 'https://m.media-amazon.com/images/I/71wK1yhhBYL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81uO-19TruL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/41SARQ547ZL._AC_SX679_.jpg', 'MEK Hero G2 I2435F Gaming Desktop', 1199, 'ZOTAC', 'G2 I2435F', 'Intel 12th Gen Core i5 12400F 6-Core/12-Thread Processo', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3050', '8GB', '500GB SSD', 'Windows 11', 'MEK HERO G2 I2435F Gaming Desktop Powered by ZOTAC Intel 12th Gen Core i5 12400F 6-Core/12-Thread Processor, 16GB 3200 MHz DDR4, NVIDIA GeForce RTX 3050 8GB, 500GB SSD, WiFi+Bluetooth, Windows 11 Home'),
(3, 'https://m.media-amazon.com/images/I/81GZeBFAzSS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81ktMMmBtJS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/913c4IJx+pS._AC_SX679_.jpg', 'SkyTech Archang Gaming Computer', 1299, 'SkyTech', 'ST-Arch3.0-0180', 'AMD Ryzen 5 3600 6-Core 3.6GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB', '500GB SSD', 'Windows 10 Home', 'SkyTech Archangel 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, RTX 3060 12GB, 1TB SSD, 16GB DDR4 3200, RGB Fans, AC WiFi, 600W Gold PSU, Windows 10 Home 64-bit, White'),
(4, 'https://theelectronics.shop/wp-content/uploads/2022/04/91K6vtGNPML._AC_SL1500_.jpg', 'https://theelectronics.shop/wp-content/uploads/2022/04/71-S5TnHN2L._AC_SL1200_.jpg', 'https://theelectronics.shop/wp-content/uploads/2022/04/91iIbyaWfJL._AC_SL1500_.jpg', 'Thermaltake S3WT-B550 Gaming Desktop', 1699, 'Thermaltake', 'S3WT-B550 ', 'AMD Ryzen 5 5600X 6-Core/8-Thread Processor', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB', '1TB NVMe SSD', 'Windows 10 Home', 'Thermaltake Glacier 360 Computer S3WT-B550--G36-LCS Liquid-Cooled PC (AMD Ryzen 5 5600X, RTX 3060, 16GB RGB 3600Mhz DDR4 ToughRAM RGB Memory, 1TB NVMe M.2, WiFi, Win 10 Home) Gaming Desktop Computer S3WT-B550--G36-LCS'),
(5, 'https://m.media-amazon.com/images/I/81NVDYTkRnL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91Qorma5FGL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91BCgCC8ayL._AC_SX679_.jpg', 'SkyTech Shadow Gaming Computer', 1599, 'SkyTech', 'Shadow 3.0', 'AMD Ryzen 7 3700X 8-Core 3.6GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB', '1TB NVMe SSD', 'Windows 10 Home', 'SkyTech Shadow 3.0 Gaming Computer PC Desktop - Ryzen 7 3700X 8-Core 3.6GHz, RTX 3060 12GB, 1TB SSD, 16GB DDR4 3000, RGB Fans, AC WiFi, 600W Gold PSU, Windows 10 Home 64-bit, Black'),
(6, 'https://m.media-amazon.com/images/I/81MXkaCzUaL._AC_SX466_.jpg', 'https://m.media-amazon.com/images/I/71V83lZvTPL._AC_SX425_.jpg', 'https://m.media-amazon.com/images/I/81IbtpEIEdS._AC_SX425_.jpg', 'SkyTech Blaze 3.0 Gaming Computer', 799, 'SkyTech', ' Blaze 3.0', 'Intel Core i3 10100F 3.6 GHz', '8GB 3000Mhz DDR4 ', 'NVIDIA GeForce GTX 1650', '4 GB', '500GB SSD', 'Windows 10 Home', 'SkyTech Blaze 3.0 Gaming Computer PC Desktop - Intel i3-10100F, GTX 1650, 500GB SSD, 8GB DDR4 3000, RGB Fans, AC WiFi, Windows 10 Home 64-bit, White'),
(7, 'https://m.media-amazon.com/images/I/81TQj9Ys5ML._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91at90nW1DL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/918mI-M2MHL._AC_SX679_.jpg', 'SkyTech Prisma II Gaming Desktop ', 4499, 'SkyTech', 'Prism II', 'Intel Core i9 12900K 3.2 GHz', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3090', '12 GB', '1TB NVMe SSD', 'Windows 10 Home', 'Skytech Prism II Gaming PC Desktop – Intel Core i9 12900K 3.2 GHz, RTX 3090, 1TB NVME Gen4 SSD, 32G DDR5 RGB, 850W Gold PSU, 360mm AIO, AC Wi-Fi, Windows 10 Home 64-bit'),
(8, 'https://m.media-amazon.com/images/I/91+wVSkALwL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91ae0Eqc3xL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/9182gfeh28L._AC_SX679_.jpg', 'SkyTech Blaze Gaming Computer', 949, 'SkyTech', 'Blaze II', 'AMD Ryzen 5 3600 6-Core 3.6GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce GTX 1660', '6 GB', '1TB NVMe SSD', 'Windows 10 Home', 'SkyTech Blaze II Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, GTX 1660 6G, 1TB NVMe SSD, 16GB DDR4 3000, RGB, AC WiFi, Windows 10 Home 64-bit'),
(9, 'https://m.media-amazon.com/images/I/81u6yFQH9jL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91DATAvd2eL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81mN5NpRZaL._AC_SY879_.jpg', 'SkyTech Shiva 3.0 Gaming Desktop', 1599, 'SkyTech', 'Shiva', 'AMD Ryzen 5 5600X 3.7GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3070', '8GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'Skytech Shiva Gaming PC Desktop - AMD Ryzen 5 5600X 3.7GHz, RTX 3070 8GB GDDR6, 16GB DDR4 3200, 1TB NVMe SSD, 650W Gold PSU, AC WiFi, Windows 10 Home'),
(10, 'https://m.media-amazon.com/images/I/81H9d1Gy-TL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91Xnuv3oKqL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/71T6ENR8WuL._AC_SY879_.jpg', 'Skytech Azure 3.0 Gaming Desktop', 1599, 'SkyTech', 'Skytech Azure', 'Intel Core i5 12600K 3.7 GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '8GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'Skytech Azure Gaming PC Desktop – Intel Core i5 12600K 3.7 GHz, RTX 3060 Ti, 1TB NVME SSD, 16G DDR4 3200, 650W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit'),
(11, 'https://m.media-amazon.com/images/I/91aSMR0LmwL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91D1JEBBF5L._AC_SY879_.jpg', 'https://m.media-amazon.com/images/I/61bybLBYJYL._AC_SX679_.jpg', 'MSI Codex R (Tower) Gaming Desktop', 1799, 'MSI', 'Codex R 11TG-030US', 'Intel Core i7-11700 4.8 GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '8GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'MSI Codex R (Tower) Gaming Desktop, Intel Core i7-11700, GeForce RTX 3060 Ti, 16GB Memory, 1TB SSD, WiFi 6, VR-Ready, Windows 10 Home Adv. (11TG-030US)'),
(12, 'https://m.media-amazon.com/images/I/81Zjf+2M3DL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81uGbS46CAL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/610MyeDX2LL._AC_SY879_.jpg', 'Skytech Chronos Gaming PC Desktop', 1599, 'SkyTech', 'Chronos', 'Intel Core i5 12600K 3.7 GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3070', '8GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'Skytech Chronos Gaming PC Desktop – Intel Core i5 12600K 3.7 GHz, RTX 3070, 1TB NVME SSD, 16G DDR4 3200, 650W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit'),
(13, 'https://m.media-amazon.com/images/I/416ZhU1MSqL._AC_.jpg', 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//638407_284661_04_front_zoom.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuklBRvAct-z6_-PLyKTZVM755UCM_HOJyow&usqp=CAU', 'MSI Aegis RS 12TF 254US Gaming Desktop', 2759, 'MSI', 'Aegis RS', 'Intel Core i7 12th Gen i7-12700K', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '8GB GDDR6', '2TB NVMe SSD', 'Windows 11', 'MSI Aegis RS Aegis RS 12TF 254US Gaming Desktop Computer - Intel Core i7 12th Gen i7-12700K - 16 GB RAM - NVIDIA GeForce RTX 3060 Ti - 2TB NVMe SSD - 1 TB SSD - '),
(14, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmAuaDKUifmmcUoZlGeP2u9DS4-zSejKzBQ&usqp=CAU', 'https://m.media-amazon.com/images/I/81Yaco9EMLL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/818aJqh+HjL._AC_SX679_.jpg', 'MSI Gamer Xtreme VR Gaming Desktop', 2299, 'MSI', 'Gamer Xtreme VR', 'Intel Core i9-12900KF 3.2GHz', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3070', '8GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i9-12900KF 3.2GHz, GeForce RTX 3070 8GB, 16GB DDR4, 1TB NVMe PCIe SSD, WiFi & Win 11 (GXiVR8080A28), Black'),
(15, 'https://m.media-amazon.com/images/I/81boPa1UlPL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81Nj49MiqvL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/71mVfshvr3L._AC_SX679_.jpg', 'Thermaltake Glacier i3510 Gaming Desktop', 1199, 'Thermaltake', 'Glacier i3510', 'Intel Core i5-10400F', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3050', '8GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'Thermaltake LCGS Glacier i3510 CPU Gaming Desktop (Intel Core™ i5-10400F, ToughRam Z-ONE 3600Mhz 16GB RGB Memory, NVIDIA GeForce® RTX 3050, 1TB M.2 NVMe, Win 11) S1GL-B560-350-LCS'),
(16, 'https://m.media-amazon.com/images/I/816nxSZz+WS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91rXqPEO+tS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91-c9Jajq2S._AC_SX679_.jpg', 'Thermaltake Reactor 380 Gaming Computer', 2499, 'Thermaltake', 'Reactor 380', 'AMD Ryzen 7 5800X', '8GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3080', '10GB GDDR6', '2TB NVMe SSD', 'Windows 11', 'Thermaltake Reactor 380 Liquid-Cooled PC (AMD Ryzen 7 5800X, NVIDIA GeForce RTX 3080, 16GB RGB 3600Mhz DDR4 RGB ToughRAM, Seagate FireCuda 520 NVMe 1TB, WiFi, Win 11) Gaming Desktop Computer TW1B-B550-R38-LCS'),
(17, 'https://m.media-amazon.com/images/I/81hnAN2k-+L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91qmoMUbAOL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81J75q4IE2L._AC_SX679_.jpg', 'Thermaltake Graphite 360 Gaming Computer', 1399, 'Thermaltake', 'Graphite 360', 'AMD Ryzen 5 5600X', '8GB 3000Mhz DDR4', 'NVIDIA GeForce RTX 3060', '8GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'Thermaltake Graphite 360 Gaming PC (AMD Ryzen 5 5600X, RTX 3060, 16GB RGB 3200Mhz DDR4 ToughRAM RGB Memory, 1TB NVMe M.2, WiFi, Win 11) Gaming Desktop Computer S1BK-B550-G36-LCS'),
(18, 'https://m.media-amazon.com/images/I/81KVXpiSFSL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/814UivLl8GL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61WzaoEFIAL._AC_SX679_.jpg', 'Thermaltake 360T AIO Liquid Gaming Computer', 1599, 'Thermaltake', 'Avalanche 360T', 'AMD Ryzen™ 5 5600X 6-core', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '10GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'Thermaltake LCGS Avalanche 360T AIO Liquid Cooled Gaming PC (AMD Ryzen™ 5 5600X 6-core, DDR4 3600Mhz 16GB RGB Memory, NVIDIA® GeForce RTX™ 3060 Ti, 1TB NVMe M.2, WiFi, Win10 Home) D3AV-B550-36T-LCS'),
(19, 'https://m.media-amazon.com/images/I/81J6OIX+RBL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81ivzFsa0+L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/917FWwf+vHL._AC_SX679_.jpg', 'Thermaltake Shadow 360i Gaming Computer', 2049, 'Thermaltake', 'Shadow 360i', 'AMD Ryzen 5 3600', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '10GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'Thermaltake Shadow 360i Liquid-Cooled PC (AMD Ryzen 5 3600, RTX 3060 Ti, 16GB RGB 3000Mhz DDR4 ToughRAM RGB Memory, 1TB NVMe M.2, WiFi, Win 10 Home) Gaming Desktop Computer P3BK-B450-S36-LCS'),
(20, 'https://m.media-amazon.com/images/I/81W7s52bVgL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81bDiN1w6lL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81EBJqa6LaL._AC_SX679_.jpg', 'Thermaltake AH-360S AIO Gaming Computer', 1799, 'Thermaltake', 'AH-360S AIO', 'AMD Ryzen 5 5600X 6-core', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'Thermaltake LCGS AH-360S AIO Liquid Cooled Gaming PC (AMD Ryzen 5 5600X 6-core,ToughRam DDR4 3600Mhz 16GB RGB,NVIDIA GeForce RTX 3060, NVMe 1TB M.2, Win 11 Home) AHW2-B550-A36-LCS'),
(21, 'https://m.media-amazon.com/images/I/617NZwKPTFL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/6192DDWnqPL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/41SARQ547ZL._AC_SX679_.jpg', 'MEK HERO G1 A5636 Gaming Desktop', 1399, 'ZOTAC', 'G1 A5636', 'AMD Ryzen 5 5600X 6-Core/12-Thread Processor', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MEK HERO G1 A5636 Gaming Desktop Powered by ZOTAC AMD Ryzen 5 5600X 6-Core/12-Thread Processor, 16GB 3200 MHz DDR4, NVIDIA GeForce RTX 3060 12GB, 500GB M.2 NVMe SSD + 1TB 7200 RPM HDD,WiFi + Bluetooth'),
(22, 'https://m.media-amazon.com/images/I/61fUmvOScAL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/41SARQ547ZL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61fUmvOScAL._AC_SX679_.jpg', 'MEK Hero G1 A5837 Gaming Desktop', 1999, 'ZOTAC', 'G1 A5837', 'AMD Ryzen 7 5800X 8-Core/16-Thread Processor', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 10', 'MEK Hero G1 A5837 Gaming Desktop Powered by ZOTAC AMD Ryzen 7 5800X 8-Core/16-Thread Processor, 16GB 3200 MHz DDR4, NVIDIA GeForce RTX 3060 12GB, 1TB M.2 NVMe SSD + 1TB 7200 RPM HDD, WiFi + Bluetooth'),
(23, 'https://m.media-amazon.com/images/I/91P6OAUc8gL._AC_SX466_.jpg', 'https://m.media-amazon.com/images/I/91b-Bkk2fPL._AC_SX466_.jpg', 'https://m.media-amazon.com/images/I/91gmy5WGdNL._AC_SX466_.jpg', 'MEK Hero G1 I1416FV Gaming Desktop', 999, 'ZOTAC', 'G1 I1416FV', 'Intel 11th Gen Core i5 11400F 6-Core/12-Thread Processor', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MEK Hero G1 I1416FV Gaming Desktop Powered by ZOTAC Intel 11th Gen Core i5 11400F 6-Core/12-Thread Processor, 8GB 3200 MHz DDR4, NVIDIA GeForce GTX 1650 4GB, 500GB M.2 NVMe SSD, WiFi + Bluetooth'),
(24, 'https://m.media-amazon.com/images/I/71wK1yhhBYL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81uO-19TruL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/41SARQ547ZL._AC_SX679_.jpg', 'MEK HERO G2 I2435F Gaming Desktop', 1399, 'ZOTAC', 'G2 I2435F', 'Intel 12th Gen Core i5 12400F 6-Core/12-Thread Processor', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3060 Ti', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MEK HERO G2 I2435F Gaming Desktop Powered by ZOTAC Intel 12th Gen Core i5 12400F 6-Core/12-Thread Processor, 16GB 3200 MHz DDR4, NVIDIA GeForce RTX 3060 Ti, 1TB NVMe SSD, WiFi+Bluetooth, Windows 11'),
(25, 'https://m.media-amazon.com/images/I/81Kh6Ik2G5S._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/91TuFsx2AMS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/81mN5NpRZaL._AC_SY879_.jpg', 'MEK Hero G1 I73920 Gaming PC Desktop', 1899, 'ZOTAC', 'G1 I73920', 'AMD Ryzen 5 5600X 3.7GHz', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3060', '10 GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'MEK Hero G1 I73920 Gaming PC Desktop by ZOTAC - AMD Ryzen 5 5600X 3.7GHz, RTX 3080 10GB GDDR6X, 16GB DDR4 3200, 1TB NVMe SSD, 750W Gold PSU, AC WiFi, Windows 10 Home 64-bit'),
(26, 'https://m.media-amazon.com/images/I/61Ec-H+32nL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/71-bV3J6Z3L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61AeSoTkMsL._AC_SX679_.jpg', 'MSI Aegis RS (Tower) Gaming Desktop', 2049, 'MSI', 'Aegis RS (Tower)', 'Intel Core i7-12700K', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3060 Ti', '10 GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'MSI Aegis RS (Tower) Gaming Desktop, Intel Core i7-12700K, NVIDIA GeForce RTX 3060 Ti, 16GB Memory (Dual-CHL), 1TB SSD, WiFi 6E, Liquid Cooling, USB Type-C, VR-Ready, Windows 11 Home (12TD-260US)'),
(27, 'https://m.media-amazon.com/images/I/81ZyqL-USCS._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/819a2NPB8GS._AC_SY879_.jpg', 'https://m.media-amazon.com/images/I/71yqH7aiivS._AC_SX679_.jpg', 'MSI Trident X (SFF)', 3099, 'MSI', 'Trident X', 'Intel Core i9-11900K', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3090', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MSI Trident X (SFF) Gaming Desktop, Intel Core i9-11900K, GeForce RTX 3090, 32GB Memory, 2TB SSD, WiFi 6E, USB Type-C, Thunderbolt 4, VR-Ready, Windows 10 Home Adv. (11TE-1870US'),
(28, 'https://m.media-amazon.com/images/I/61ifLJGIIXL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/51QhnJ0wJyL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/511+9GcFF7L._AC_SX679_.jpg', 'MSI Aegis R Gaming Desktop', 1899, 'MSI', 'Aegis R', 'Intel Core i7-12700F', '32GB 3200MHz DDR4', 'NVIDIA GeForce RTX 3060 Ti', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MSI Aegis R Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 Ti, 16GB Memory (Dual-CHL), 1TB NVMe SSD, WiFi 6, Liquid Cooling, USB Type-C, Win 11 Home, Keyboard and Mouse (12TE-268US)'),
(29, 'https://m.media-amazon.com/images/I/81daFNYtcVL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/I/61uO-aWZ5DL._AC_SL1024_.jpg', 'https://m.media-amazon.com/images/I/61x9izzgX0L._AC_SL1500_.jpg', 'MSI Aegis RS (Tower) Gaming Desktop', 2099, 'MSI', 'Aegis RS2(Tower)', 'Intel Core i9-12900K', '16GB 3000Mhz DDR4 ', 'NVIDIA GeForce RTX 3080', '12 GB GDDR6', '1TB NVMe SSD', 'Windows 10 Home', 'MSI Aegis RS (Tower) Gaming Desktop, Intel Core i9-12900K, GeForce RTX 3080, 32GB Memory (Dual-CHL), 1TB SSD + 2TB HDD, WiFi 6E, Liquid Cooling, USB Type-C, VR-Ready, Windows 11 Home (12TE-255US)'),
(30, 'https://m.media-amazon.com/images/I/314Xp1QRwaL._AC_.jpg', 'https://m.media-amazon.com/images/I/314Xp1QRwaL._AC_.jpg', 'https://m.media-amazon.com/images/I/31YZWpYqNpL._AC_.jpg', 'MSI DP20Z  Gaming Desktop', 1099, 'MSI', 'PRO DP20Z 5M 035US', 'AMD Ryzen 3 5300G Quad-core (4 Core) 4 GHz', '8GB 3000Mhz DDR4', 'NVIDIA GeForce RTX 3060 Ti', '10 GB GDDR6', '1TB NVMe SSD', 'Windows 11', 'MSI PRO DP20Z 5M 035US Gaming Desktop - AMD Ryzen 3 5300G Quad-core (4 Core) 4 GHz - NVIDIA GeForce RTX 3060 Ti - 8 GB RAM DDR4 SDRAM - 1TB NVMe SSD PCI Express NVMe SSD - Black');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'samvel', 'samvel@gmail.com', '$2b$10$LR9AS6.chDNA0wz/RErEPuu2M5ZiazWzUzqLpo5l0/X4F7GMwz7ia', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJzYW12ZWwiLCJlbWFpbCI6InNhbXZlbEBnbWFpbC5jb20iLCJpYXQiOjE2NTYxNDkxODksImV4cCI6MTY1NjIzNTU4OX0.5y8qmArjFgiIoXMoF_VtTC32JKRS0sgwJtk01d3BBsk', '2022-06-15 12:44:25', '2022-06-25 09:26:29'),
(102, 'samvel2', 'samvel2@gmail.com', '$2b$10$9qewv2qJ0nfXKueYFhLml.7DTbQACXGFk4jsNBk7pw30S/uyHawfa', NULL, '2022-06-16 13:55:00', '2022-06-20 11:22:48');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_price` (`id`,`price`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
