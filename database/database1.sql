-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 13, 2019 at 07:19 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Reyhoon`
--

-- --------------------------------------------------------

--
-- Table structure for table `Address`
--

CREATE TABLE `Address` (
  `id` int(10) NOT NULL,
  `city` varchar(25) NOT NULL,
  `area` varchar(255) NOT NULL,
  `addressLine` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Address`
--

INSERT INTO `Address` (`id`, `city`, `area`, `addressLine`) VALUES
(100, 'تهران', 'میرداماد', 'میرداماد - زیر پل میرداماد'),
(101, 'تهران', 'جردن', 'جردن - گلشهر'),
(103, 'تهران', 'جردن', 'جردن - صبا'),
(104, 'تهران', 'جردن', 'جردن - ایرج'),
(105, 'تهران', 'جردن', 'جردن - چهاراه جهان کودک'),
(106, 'تهران', 'جردن', 'جردن - سیول'),
(107, 'تهران', 'شهرک غرب', 'شهرک غرب - بلوار دریا'),
(108, 'تهران', 'شهرک غرب', 'شهرک غرب - بین میدان سرو و میدان کتابی'),
(109, 'تهران', 'شهرک غرب', 'شهرک غرب - بلوار دریا');

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `id` varchar(25) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
('برگر', 'برگر'),
('خورشت', 'خورشت'),
('سالاد', 'سالاد'),
('ساندویچ', 'ساندویچ'),
('سوشی', 'سوشی'),
('غذای ایرانی', 'غذای ایرانی'),
('فست فود', 'فست فود'),
('پاستا', 'پاستا'),
('پیتزا', 'پیتزا'),
('کباب', 'کباب');

-- --------------------------------------------------------

--
-- Table structure for table `CategoryResturant`
--

CREATE TABLE `CategoryResturant` (
  `id` int(20) NOT NULL,
  `category_id` varchar(25) NOT NULL,
  `resturant_id` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `CategoryResturant`
--

INSERT INTO `CategoryResturant` (`id`, `category_id`, `resturant_id`) VALUES
(7000, 'پیتزا', 'شیک شک'),
(7001, 'برگر', 'شیک شک'),
(7003, 'ساندویچ', 'شیک شک'),
(7004, 'برگر', 'باگت'),
(7005, 'پیتزا', 'باگت'),
(7006, 'سوشی', 'سوشی شاپ'),
(7007, 'برگر', 'دانان'),
(7008, 'سالاد', 'دانان'),
(7009, 'برگر', 'شیلا'),
(7010, 'ساندویچ', 'شیلا'),
(7011, 'پیتزا', 'شیلا'),
(7012, 'برگر', 'سیب'),
(7013, 'پیتزا', 'سیب'),
(7014, 'برگر', 'اژدر زاپاتا'),
(7015, 'پیتزا', 'اژدر زاپاتا'),
(7016, 'ساندویچ', 'اژدر زاپاتا'),
(7017, 'برگر', 'پنجره'),
(7018, 'پیتزا', 'پنجره'),
(7019, 'سالاد', 'باماهاس'),
(7020, 'ساندویچ', 'باماهاس');

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `id` int(10) NOT NULL,
  `author` varchar(25) NOT NULL,
  `quality` int(1) NOT NULL,
  `packaging` int(1) NOT NULL,
  `deliveryTime` int(3) NOT NULL,
  `text` varchar(255) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`id`, `author`, `quality`, `packaging`, `deliveryTime`, `text`, `created_at`) VALUES
(1000, 'امیرحسین', 5, 4, 20, 'عالی بود', '2019-06-03'),
(1001, 'علی قوام', 3, 4, 40, 'نسبت به قیمتش خوب نبود', '2019-06-01'),
(1003, 'محمد علی', 4, 3, 30, '', '2019-06-05'),
(1004, 'محمد حسین', 4, 4, 50, 'یکم سرد بود', '2019-06-09'),
(1005, 'فرزاد', 5, 5, 30, '', '2019-06-05'),
(1006, 'سعیده', 4, 4, 40, 'خیلی تند شده بود', '2019-06-04'),
(1007, 'راحله', 4, 2, 20, 'سس کم داشت', '2019-06-08'),
(1008, 'فریده', 3, 4, 60, 'خیلی دیر رسید', '2019-06-09'),
(1009, 'مریم', 4, 3, 30, 'ممنون بابت غذای عالی', '2019-06-11'),
(1010, 'حمید', 3, 5, 25, 'نسبت به قیمتش بد نبود', '2019-06-03');

-- --------------------------------------------------------

--
-- Table structure for table `CommentResturant`
--

CREATE TABLE `CommentResturant` (
  `id` int(20) NOT NULL,
  `comment_id` int(10) NOT NULL,
  `resturant_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Food`
--

CREATE TABLE `Food` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `price` int(7) NOT NULL,
  `description` varchar(255) NOT NULL,
  `foodSet` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Food`
--

INSERT INTO `Food` (`id`, `name`, `price`, `description`, `foodSet`) VALUES
(10000, 'پیتزای پپرونی', 50000, 'خمیر کره ای - پپرونی دودی فلفلی - پنیر و فلفل سبز', 'پیتزا'),
(10001, 'پیتزا سبزیجات', 37000, 'بادمجان، گوجه فرنگی، فلفل دلمه ای، قارچ، پیاز، سس پستو، خمیر کره ای', 'پیتزا'),
(10003, 'پیتزا مد استیک', 80000, '350 گرم فیله گوساله، فلفل تند، پیاز، زیتون سیاه، سس مد، خمیر کره ای', 'پیتزا'),
(10004, 'همبرگر', 37000, '120 گرم گوشت خالص، پیاز کاراملایز شده، کاهو، گوجه، سس', 'برگر'),
(10005, 'چیزبرگر', 38000, '120 گرم گوشت خالص، پنیر، پیاز کاراملایز شده، کاهو، گوجه، سس ویژه', 'برگر'),
(10006, 'گارنی برگر', 41000, '120 گرم گوشت خالص، پنیر، پیاز قرمز اسلایس، کاهو، خیار شور، گوجه، سس سیر ویژه شیک شک', 'برگر'),
(10007, 'ساندویج مد داگ', 27000, 'هات داگ 90% گوشت، سس پنیر، فلفل هالوپینو، سس اسپایسی شیک شک', 'ساندویچ'),
(10008, 'پیتزا پپرونی', 39000, 'خمیر پیتزا ایتالیایی چاودار، پپرونی اسلایس شده، سس مخصوص باگت', 'پیتزا'),
(10009, 'پیتزا سیر استیک', 57000, 'خمیر پیتزا ایتالیایی چاودار، راسته گوساله، روغن زیتون، سیر تازه، سس مخصوص باگت', 'پیتزا'),
(10010, 'پیتزا بوقلمون', 47000, 'خمیر پیتزا ایتالیایی چاودار، گوشت پروسس شده بوقلمون، پنیر مخلوط پیتزا، سس مخصوص باگت', 'پیتزا'),
(10011, 'قارچ برگر', 40000, '115 گرم راسته گوساله چرخ شده، پنیر گودا، سس قارچ، خیارشور، سس مخصوص برگر باگت، نان مخصوص ', 'برگر'),
(10012, 'رول سالمون آووکادو', 62000, 'كنجد، به همراه سس سویا، ترشی زنجبیل و واسابی', 'سوشی'),
(10013, 'سوشی سالمون', 24000, '', 'سوشی'),
(10014, 'سوشی سالمون تریاکی', 26000, 'سس ترياكی، كنجد', 'سوشی'),
(10015, 'سوشی تخم ماهی سالمون', 3000, 'به همراه سس سویا، ترشی زنجبیل و واسابی', 'سوشی'),
(10016, 'ماکی سالمون اسپایسی', 54000, 'سالمون، سس اسپايسی به همراه سس سویا، ترشی زنجبیل و واسابی', 'سوشی'),
(10017, 'داتان برگر', 58000, '150 گرم گوشت تازه گوساله، کریمینی ماشروم، میکس پیاز کاراملی و قارچ، کاهوی باتاویا، دوتا پنیر امنتال، سس ', 'برگر'),
(10018, 'آپ تان برگر', 57500, '150 گرم گوشت تازه گوساله، دوتا پنیر زرد آمریکن، کاهوی باتاویا، گوجه، پیاز کاراملی، سس دان تان <با سیب زمینی ', 'برگر'),
(10019, 'سالاد کیل سزار', 37500, 'کاهو لیتل جم، کیل، مرغ گریل شده، کروتان، پارمسان، سس سزار', 'سالاد'),
(10020, 'سالاد یونانی', 3200, 'کاهو لیتل جم، خیار، گوجه، زیتون سیاه، پنیر سفید فتا، سس سبز', 'سالاد'),
(10021, 'سالاد باربیکیو', 38500, 'کاهو لیتل جم، سالسای گوجه، ذرت، لوبیا، مرغ باربیکیو، سس رنچ-باربیکیو', 'سالاد'),
(10022, 'سالاد گاردن', 22500, '', 'سالاد'),
(10023, 'هات داگ با پنیر گودا', 23900, 'هات داگ گوشت با پنیر گودا، ذرت، خیارشور، گوجه فرنگی ، سبزیجات معطر، سس خردل، سس قارچ', 'ساندویچ'),
(10024, 'هات داگ مرگز با پنیر', 27900, 'هات داگ گوشت تازه 90% (مرگز) ، پیاز تازه ، جعفری ، ذرت ، پوره سیب زمینی سبزیجات معطر ، سس گرین', 'ساندویچ'),
(10025, 'پیتزا مخلوط', 32900, 'ژامبون گوشت 70%، ژامبون مرغ 70%، هات داگ 70%، ادویه، پنیر موزارلا، زیتون، گوجه فرنگی ، قارچ ، فلفل ', 'پیتزا'),
(10026, 'پیتزا پپرونی', 33900, 'کالباس پپرونی، قارچ ، پنیر موزارلا، ترشی فلفل هالوپینو ، روغن کنجد', 'پیتزا'),
(10027, 'شیلا چیزبرگر', 24500, 'همبرگر ویژه 130 گرمی ، گوجه فرنگی ، پنیر ورقه‌ای، خیارشور، کاهو، سس همبرگر', 'برگر'),
(10028, 'پیتزا پپرونی', 32900, 'خمیر پیتزا ایتالیایی 32 سانتیمتری، سوسیس پپرونی، سس مخصوص، پنیر مخصوص', 'پیتزا'),
(10029, 'پیتزا گوشت و قارچ', 32900, 'خمیر پیتزا آمریکایی مثلثی 33*33*33 سانتیمتری، گوشت چرخ کرده، قارچ، فلفل دلمه ای، سس مخصوص، پنیر ', 'پیتزا'),
(10030, 'پیتزا ۴ فصل', 40900, 'خمیر پیتزا ایتالیایی 32 سانتیمتری، 1/4 پیتزا کنیباله، 1/4 پیتزا چیکن گورمه، 1/4 پیتزا سبزیجات، 1/4 پیتزا ', 'پیتزا'),
(10031, 'سوپر برگر', 36900, 'گوشت مخ150 گرم برگر گوشت، پنیر دیپ چدار، ژامبون، یک عدد هات داگ، پنیر ذوب شده روی نان گرد، سیب ', 'برگر'),
(10032, 'برگر', 21900, '150 گرم برگر گوشت، کاهو، گوجه، پیاز کاراملی، خیارشور، سس مخصوص، نان گرد', 'برگر'),
(10033, 'پیتزا پپرونی', 26000, 'کالباس تند- قارچ- پنیر', 'پیتزا'),
(10034, 'پیتزا میکس', 30000, 'گوشت چرخ کرده- پپرونی - قارچ- فلفل و پنیر', 'پیتزا'),
(10035, 'ویژه یونانی', 22000, 'استیک - قارچ - پنیر', 'ساندویچ'),
(10036, 'همبرگر مخصوص', 14000, '', 'برگر'),
(10037, 'سوپریم ونکوور', 33000, 'خمیر تازه- سس مخصوص- پپرونی- گوشت-ژامبون مرغ- قارچ', 'پیتزا'),
(10038, 'رست بیف', 45000, 'خمیر تازه- سس مخصوص- گوشت مغر ران- زیتون', 'پیتزا'),
(10039, 'چیزبرگر دوبل', 42000, '', 'برگر'),
(10040, 'سالاد سویسی', 5500, '', 'سالاد'),
(10041, 'ساندویچ هالوچیزکن', 41000, '', 'ساندویچ'),
(10042, 'ساندویچ بیکن بره', 38500, '', 'ساندویچ'),
(10043, 'ساندویچ رست بیف', 54500, '', 'ساندویچ');

-- --------------------------------------------------------

--
-- Table structure for table `FoodResturant`
--

CREATE TABLE `FoodResturant` (
  `id` int(20) NOT NULL,
  `food_id` int(10) NOT NULL,
  `resturant_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `FoodResturant`
--

INSERT INTO `FoodResturant` (`id`, `food_id`, `resturant_id`) VALUES
(8, 10000, 0),
(9, 10001, 0),
(10, 10003, 0),
(11, 10004, 0),
(12, 10005, 0),
(13, 10006, 0),
(14, 10007, 0),
(15, 10008, 1),
(16, 10009, 1),
(17, 10010, 1),
(18, 10011, 1),
(19, 10012, 2),
(20, 10013, 2),
(21, 10014, 2),
(22, 10015, 2),
(23, 10016, 2),
(24, 10017, 3),
(25, 10018, 3),
(26, 10019, 3),
(27, 10020, 3),
(28, 10021, 3),
(29, 10022, 4),
(30, 10023, 4),
(31, 10024, 4),
(32, 10026, 4),
(33, 10026, 4),
(34, 10027, 4),
(35, 10028, 6),
(36, 10029, 6),
(37, 10030, 6),
(38, 10031, 6),
(39, 10032, 6),
(40, 10033, 7),
(41, 10034, 7),
(42, 10035, 7),
(43, 10035, 7),
(44, 10036, 7),
(45, 10037, 8),
(46, 10039, 8),
(47, 10040, 9),
(48, 10041, 9),
(49, 10042, 9),
(50, 10043, 9);

-- --------------------------------------------------------

--
-- Table structure for table `Restaurant`
--

CREATE TABLE `Restaurant` (
  `id` int(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `openingTime` int(2) NOT NULL,
  `closingTime` int(2) NOT NULL,
  `averageRate` decimal(1,1) NOT NULL,
  `address` int(10) NOT NULL,
  `categories` varchar(25) NOT NULL,
  `foods` int(10) NOT NULL,
  `comments` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Restaurant`
--

INSERT INTO `Restaurant` (`id`, `name`, `logo`, `openingTime`, `closingTime`, `averageRate`, `address`, `categories`, `foods`, `comments`) VALUES
(100000, 'شیک شک', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/-362_3180_1520945332.jpeg@!branch_logo_web_default', 12, 23, '0.9', 100, 'شیک شک', 0, 5000),
(100001, 'باگت', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/baguette_5494_1536561462.jpeg@!branch_logo_web_default', 11, 23, '0.9', 101, 'باگت', 1, 5001),
(100002, 'سوشی شاپ', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/sushishop_6034_1547548121.jpeg@!branch_logo_web_default', 12, 23, '0.9', 103, 'سوشی شاپ', 2, 5002),
(100004, 'دانان', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/downtown_6473_1549979103.jpeg@!branch_logo_web_default', 12, 23, '0.9', 103, 'دانان', 3, 5003),
(100005, 'شیلا', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/shila_8_1540375602.jpeg@!branch_logo_web_default', 11, 23, '0.9', 104, 'شیلا', 4, 5004),
(100006, 'سیب', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/sib_483_1520945308.jpeg@!branch_logo_web_default', 12, 24, '0.9', 106, 'سیب', 6, 5006),
(100007, 'اژدر زاپاتا', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/ajdar-zapata_433_1537774478.jpeg@!branch_logo_web_default', 18, 23, '0.9', 107, 'اژدر زاپاتا', 7, 5007),
(100008, 'پنجره', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/panjere-saadat-abad_3175_1520945332.jpeg@!branch_logo_web_default', 12, 24, '0.9', 108, 'پنجره', 8, 5008),
(100009, 'باماهاس', 'https://dist.reyhoon-static.com/uploads/images/restaurants/logos/bamahas_1400_1520945270.jpeg@!branch_logo_web_default', 11, 23, '0.9', 109, 'باماهاس', 9, 5009);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Address`
--
ALTER TABLE `Address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `CategoryResturant`
--
ALTER TABLE `CategoryResturant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `resturant_id` (`resturant_id`);

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `CommentResturant`
--
ALTER TABLE `CommentResturant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `resturant_id` (`resturant_id`);

--
-- Indexes for table `Food`
--
ALTER TABLE `Food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `FoodResturant`
--
ALTER TABLE `FoodResturant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `food_id` (`food_id`),
  ADD KEY `resturant_id` (`resturant_id`);

--
-- Indexes for table `Restaurant`
--
ALTER TABLE `Restaurant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address` (`address`),
  ADD KEY `categories` (`categories`),
  ADD KEY `foods` (`foods`),
  ADD KEY `comments` (`comments`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Address`
--
ALTER TABLE `Address`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;
--
-- AUTO_INCREMENT for table `CategoryResturant`
--
ALTER TABLE `CategoryResturant`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7021;
--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1011;
--
-- AUTO_INCREMENT for table `CommentResturant`
--
ALTER TABLE `CommentResturant`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Food`
--
ALTER TABLE `Food`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10044;
--
-- AUTO_INCREMENT for table `FoodResturant`
--
ALTER TABLE `FoodResturant`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `Restaurant`
--
ALTER TABLE `Restaurant`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100010;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `CategoryResturant`
--
ALTER TABLE `CategoryResturant`
  ADD CONSTRAINT `categoryresturant_ibfk_1` FOREIGN KEY (`resturant_id`) REFERENCES `Restaurant` (`categories`),
  ADD CONSTRAINT `categoryresturant_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`);

--
-- Constraints for table `CommentResturant`
--
ALTER TABLE `CommentResturant`
  ADD CONSTRAINT `commentresturant_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `Comment` (`id`),
  ADD CONSTRAINT `commentresturant_ibfk_2` FOREIGN KEY (`resturant_id`) REFERENCES `Restaurant` (`comments`);

--
-- Constraints for table `FoodResturant`
--
ALTER TABLE `FoodResturant`
  ADD CONSTRAINT `foodresturant_ibfk_1` FOREIGN KEY (`food_id`) REFERENCES `Food` (`id`),
  ADD CONSTRAINT `foodresturant_ibfk_2` FOREIGN KEY (`resturant_id`) REFERENCES `Restaurant` (`foods`);

--
-- Constraints for table `Restaurant`
--
ALTER TABLE `Restaurant`
  ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`address`) REFERENCES `Address` (`id`);
