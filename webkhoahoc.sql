-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 31, 2024 lúc 04:02 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `myapp`
--

-- --------------------------------------------------------
--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'Forex'),
(2, 'Crpyto'),
(3, 'FREE MATERIALS');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`) VALUES
(120, 22),
(121, 22),
(122, 22),
(123, 22),
(124, 23),
(125, 23),
(126, 23),
(127, 23),
(128, 23),
(129, 23),
(132, 23),
(133, 23),
(134, 23),
(135, 23),
(136, 23),
(160, 23),
(161, 23),
(130, 24),
(131, 24),
(137, 24),
(138, 24),
(139, 24),
(140, 24),
(141, 24),
(142, 24),
(143, 24),
(144, 24),
(145, 24),
(146, 24),
(147, 24),
(148, 24),
(149, 24),
(150, 24),
(151, 24),
(152, 24),
(153, 24),
(154, 24),
(155, 24),
(156, 24),
(157, 24),
(158, 24),
(159, 24),
(162, 24),
(163, 25);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_details`
--

CREATE TABLE `orders_details` (
  `id` int(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders_details`
--

INSERT INTO `orders_details` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(201, 123, 56, 1),
(202, 124, 56, 1),
(203, 125, 56, 1),
(205, 126, 56, 1),
(206, 127, 56, 1),
(207, 128, 56, 1),
(209, 130, 56, 1),
(212, 133, 67, 4),
(215, 135, 58, 1),
(216, 136, 60, 2),
(217, 137, 59, 1),
(218, 138, 58, 1),
(219, 139, 71, 1),
(220, 140, 56, 1),
(221, 141, 56, 1),
(222, 142, 56, 1),
(223, 142, 61, 1),
(224, 143, 59, 2),
(225, 143, 56, 2),
(226, 143, 58, 1),
(227, 143, 67, 1),
(228, 144, 58, 1),
(229, 145, 58, 1),
(230, 146, 58, 1),
(231, 150, 58, 1),
(232, 154, 56, 1),
(233, 157, 58, 1),
(234, 158, 58, 1),
(235, 158, 56, 1),
(236, 159, 71, 1),
(237, 160, 58, 1),
(238, 160, 59, 1),
(239, 161, 59, 1),
(240, 161, 56, 1),
(241, 162, 56, 1),
(242, 162, 58, 1),
(243, 163, 59, 1),
(244, 163, 71, 1),
(245, 163, 61, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `images` text DEFAULT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `quantity` int(10) NOT NULL,
  `short_desc` varchar(255) NOT NULL,
  `cat_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `image`, `images`, `description`, `price`, `quantity`, `short_desc`, `cat_id`) VALUES
(55, 'Forex cho người mới', 'https://btcprotrading.com/wp-content/uploads/2024/07/khoa-hoc-dau-tu-forex.jpg', '', 'Thị trường Foreign Exchange (viết tắt là Forex hay FX) sôi động cung cấp cho các nhà giao dịch và nhà đầu tư cơ hội kiếm tiền từ chênh lệch báo giá tiền tệ, cũng như bằng  sao chép giao dịch, phát triển và bán các tín hiệu và hệ thống giao dịch. Giao d', 20, 999, 'Thị trường Foreign Exchange (viết tắt là Forex hay FX) sôi động cung cấp cho các nhà giao dịch và nhà đầu tư cơ hội kiếm tiền từ chênh lệch báo giá tiền tệ, cũng như bằng  sao chép giao dịch, phát triển và bán các tín hiệu và hệ thống giao dịch. Giao d', NULL),
(56, 'Forex cho người mới', 'https://btcprotrading.com/wp-content/uploads/2024/07/khoa-hoc-dau-tu-forex.jpg', '', 'Thị trường Foreign Exchange (viết tắt là Forex hay FX) sôi động cung cấp cho các nhà giao dịch và nhà đầu tư cơ hội kiếm tiền từ chênh lệch báo giá tiền tệ, cũng như bằng  sao chép giao dịch, phát triển và bán các tín hiệu và hệ thống giao dịch. Giao dịch Forex dành cho người mới bắt đầu là cơ hội để thử sức với một lĩnh vực kinh doanh mới, đạt được tự do tài chính và bắt đầu tận dụng tối đa thời gian của mình.', 20, 983, 'Thị trường Foreign Exchange (viết tắt là Forex hay FX) sôi động cung cấp cho các nhà giao dịch và nhà đầu tư cơ hội kiếm tiền từ chênh lệch báo giá tiền tệ, cũng như bằng  sao chép giao dịch, phát triển và bán các tín hiệu và hệ thống giao dịch. Giao d', 1),
(58, 'Pro Training', 'https://www.thinkmarkets.com/TMXWebsite/media/TMXWebsite/Popular-Forex-Trading-Strategies.webp?ext=.webp', '', 'Học luôn bộ quy tắc được kiểm chứng để áp dụng ngay, học cách kiểm chứng, thống kê phương pháp, tối ưu nhiều điểm vào khác nhau', 70, 988, 'Học luôn bộ quy tắc được kiểm chứng để áp dụng ngay, học cách kiểm chứng, thống kê phương pháp, tối ưu nhiều điểm vào khác nhau', 1),
(59, 'Smart Money Concept Trading', 'https://traderptkt.com/wp-content/uploads/2023/05/Thumnail-khoa-hoc.jpg', '', 'SMC Trading (Smart Money Concept Trading) là một phương pháp giao dịch được nhiều trader sử dụng, dựa trên việc hiểu và theo dõi hành động của Smart Money – những tổ chức tài chính lớn như ngân hàng, quỹ đầu tư, và các tay chơi lớn trong thị trường tài chính.  SMC kết hợp các khái niệm về Price Action, Market Structure, và Liquidity Zones, nhấn mạnh việc phân tích hành vi của dòng tiền thông minh thay vì chỉ dựa vào chỉ báo kỹ thuật truyền thống.', 100, 993, 'SMC Trading (Smart Money Concept Trading) là một phương pháp giao dịch được nhiều trader sử dụng, dựa trên việc hiểu và theo dõi hành động của Smart Money – những tổ chức tài chính lớn như ngân hàng, quỹ đầu tư, và các tay chơi lớn trong thị trường tài ch', 1),
(60, 'Inner Circle Trader Trading', 'https://www.abdikarimfx.com/wp-content/uploads/2024/02/ICT-CONCEPTS-scaled.jpg', '', ' ICT Trading (Inner Circle Trader Trading) là một phong cách giao dịch nổi tiếng được phát triển bởi Michael J. Huddleston, thường được biết đến với tên gọi The Inner Circle Trader (ICT). Phương pháp này tập trung vào việc hiểu sâu hành vi giá dựa trên hành động của các tổ chức lớn (Smart Money) và sử dụng các khái niệm nâng cao như liquidity pools, order blocks, và market structure.', 200, 997, ' ICT Trading (Inner Circle Trader Trading) là một phong cách giao dịch nổi tiếng được phát triển bởi Michael J. Huddleston, thường được biết đến với tên gọi The Inner Circle Trader (ICT). Phương pháp này tập trung vào việc hiểu sâu hành vi giá dựa trên hà', 1),
(61, 'Wyckoff', 'https://i.ytimg.com/vi/d_rqgZCLU88/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFwIKIIgIRHjwNUDL0eJD-I_aavA', '', ' Phân tích kỹ thuật Wyckoff là một phương pháp phân tích thị trường được phát triển bởi Richard D. Wyckoff vào đầu thế kỷ 20. Đây là một trong những phương pháp mạnh mẽ và lâu đời trong phân tích kỹ thuật, chủ yếu được sử dụng để xác định các giai đoạn và xu hướng trong thị trường, từ đó đưa ra các quyết định giao dịch.', 80, 997, ' Phân tích kỹ thuật Wyckoff là một phương pháp phân tích thị trường được phát triển bởi Richard D. Wyckoff vào đầu thế kỷ 20. Đây là một trong những phương pháp mạnh mẽ và lâu đời trong phân tích kỹ thuật, chủ yếu được sử dụng để xác định các giai đoạn và', 1),
(62, 'Relative Strength Index)', 'https://cdn.litemarkets.com/cache/uploads/blog_post/blog_posts/RSI-indicator/rsi-indicator-forex-blog-preview.jpg?q=75&w=1000&s=db0b45f349b80c12bafebe6fae1e0f59', '', 'RSI (Relative Strength Index) trong trading là một chỉ báo kỹ thuật phổ biến, được sử dụng để đo lường mức độ quá mua hoặc quá bán của một tài sản trong thị trường. RSI được phát triển bởi J. Welles Wilder và thường được tính dựa trên giá đóng cửa trong một khoảng thời gian cụ thể (thường là 14 phiên).', 1, 999, 'RSI (Relative Strength Index) trong trading là một chỉ báo kỹ thuật phổ biến, được sử dụng để đo lường mức độ quá mua hoặc quá bán của một tài sản trong thị trường. RSI được phát triển bởi J. Welles Wilder và thường được tính dựa trên giá đóng cửa trong m', 2),
(65, 'TRADING HUB (FREE)', 'https://tradinghub.com/hubfs/Untitled%20design%20%284%29-1.png', '', 'Trading Hub là một nền tảng hoặc không gian chuyên biệt dành cho các nhà giao dịch tài chính, nơi họ có thể thực hiện giao dịch, trao đổi thông tin, và quản lý tài sản của mình trong môi trường an toàn và hiệu quả.  Nội dung chính của Trading Hub bao gồm:', 1, 999, 'Trading Hub là một nền tảng hoặc không gian chuyên biệt dành cho các nhà giao dịch tài chính, nơi họ có thể thực hiện giao dịch, trao đổi thông tin, và quản lý tài sản của mình trong môi trường an toàn và hiệu quả.  Nội dung chính của Trading Hub bao gồm:', NULL),
(67, 'Trading hub', 'https://img-v2-prod.whop.com/SqSg24Ck74B3gY1H1baYVJGg5nmwESj6fiBSoppoN0M/rs:fill:500:250/aHR0cHM6Ly9hc3NldHMud2hvcC5jb20vdXBsb2Fkcy8yMDI0LTA4LTE0L3VzZXJfMTIxNTM4NV9jOTUyZDRhNC1mMmE4LTQ5ZjktYmI2MS1mZjY4MTYyN2ZhYWQucG5n', '', 'Trading Hub là một nền tảng hoặc không gian chuyên biệt dành cho các nhà giao dịch tài chính, nơi họ có thể thực hiện giao dịch, trao đổi thông tin, và quản lý tài sản của mình trong môi trường an toàn và hiệu quả.  Nội dung chính của Trading Hub bao gồm: Giao dịch: Một nơi để thực hiện các giao dịch tài chính như cổ phiếu, tiền điện tử, forex, hàng hóa, v.v. Công cụ và Phân tích: Cung cấp các công cụ giao dịch, biểu đồ phân tích và các dữ liệu thị trường để giúp nhà đầu tư ra quyết định. Hỗ trợ và Cộng đồng: Nhiều Trading Hub còn cung cấp các cộng đồng giao dịch, hỗ trợ từ các chuyên gia và diễn đàn để trao đổi kinh nghiệm. Quản lý tài sản: Các nhà đầu tư có thể quản lý danh mục đầu tư, theo dõi biến động giá và thực hiện các chiến lược đầu tư.', 0, 994, 'Trading Hub là một nền tảng hoặc không gian chuyên biệt dành cho các nhà giao dịch tài chính, nơi họ có thể thực hiện giao dịch, trao đổi thông tin, và quản lý tài sản của mình trong môi trường an toàn và hiệu quả.  Nội dung chính của Trading Hub bao gồm:', 3),
(69, 'Trading zone', 'https://boomingbulls.com/wp-content/uploads/2022/05/Trading-in-the-Zone-Blog-Banner-scaled.jpg', '', ' Trading Zone (khu vực giao dịch) là một khái niệm thường được sử dụng trong phân tích kỹ thuật và giao dịch tài chính để chỉ một phạm vi giá mà trong đó hành động giá (price action) diễn ra trong một khoảng thời gian cụ thể. Đây là khu vực mà cung và cầu tương đối cân bằng, dẫn đến giá dao động trong một phạm vi hẹp mà không có sự bứt phá mạnh theo hướng tăng hoặc giảm.  Dưới đây là một số khía cạnh quan trọng liên quan đến Trading Zone:  1. Đặc điểm của Trading Zone Giới hạn rõ ràng: Trading Zone thường được xác định bởi hai mức giá chính: mức kháng cự (resistance) phía trên và mức hỗ trợ (support) phía dưới. Khối lượng giao dịch thường thấp: Trong khu vực này, nhà đầu tư và giao dịch thường ít hành động quyết liệt, dẫn đến khối lượng giao dịch không quá cao. Hành động giá tích lũy: Giá có xu hướng đi ngang hoặc dao động trong một phạm vi hẹp mà không có sự bứt phá rõ ràng. 2. Ý nghĩa của Trading Zone Tích lũy hoặc phân phối: Trading Zone có thể là giai đoạn mà nhà đầu tư lớn (smart money) đang tích lũy cổ phiếu trước một xu hướng tăng, hoặc phân phối trước khi giá giảm. Chuẩn bị cho sự bứt phá: Khi giá tích lũy đủ lâu trong một Trading Zone, nó thường dẫn đến một cú bứt phá mạnh theo một hướng, thường được gọi là \"breakout\" (phá vỡ) hoặc \"breakdown\" (giảm mạnh). Cơ hội giao dịch: Nhà giao dịch thường tận dụng các giới hạn của Trading Zone để thực hiện các giao dịch mua gần mức hỗ trợ và bán gần mức kháng cự. 3. Cách xác định Trading Zone Sử dụng biểu đồ giá: Trading Zone được phát hiện dễ dàng trên biểu đồ giá khi giá dao động trong một phạm vi hẹp trong một khoảng thời gian cụ thể. Dùng chỉ báo kỹ thuật: Các chỉ báo như RSI (Relative Strength Index), Bollinger Bands, hoặc khối lượng giao dịch có thể hỗ trợ xác định sự tích lũy hoặc phân phối trong Trading Zone. 4. Chiến lược giao dịch trong Trading Zone Giao dịch trong phạm vi (range trading): Mua tại vùng hỗ trợ và bán tại vùng kháng cự. Đón đầu bứt phá: Đặt lệnh chờ mua phía trên mức kháng cự hoặc lệnh chờ bán phía dưới mức hỗ trợ để tận dụng cú breakout. Quản lý rủi ro: Sử dụng lệnh dừng lỗ (stop-loss) để hạn chế rủi ro trong trường hợp thị trường di chuyển ngược dự đoán. 5. Lưu ý khi giao dịch với Trading Zone Xác nhận breakout: Không phải mọi cú phá vỡ đều đáng tin cậy. Cần có sự xác nhận (như khối lượng giao dịch tăng) để đảm bảo đó không phải là \"false breakout\" (phá vỡ giả). Phân tích khung thời gian: Trading Zone ở khung thời gian nhỏ có thể khác hoàn toàn so với khung thời gian lớn. Khái niệm Trading Zone rất hữu ích trong việc hiểu và giao dịch thị trường tài chính, đặc biệt trong các giai đoạn thị trường không có xu hướng rõ ràng.', 0, 999, ' Trading Zone (khu vực giao dịch) là một khái niệm thường được sử dụng trong phân tích kỹ thuật và giao dịch tài chính để chỉ một phạm vi giá mà trong đó hành động giá (price action) diễn ra trong một khoảng thời gian cụ thể. Đây là khu vực mà cung và cầu', 3),
(70, 'Sóng Elliott', 'https://image.binance.vision/editor-uploads/2816cfab70b747018bc366fbb40157b3.png', '', 'Sóng Elliott là một lý thuyết phân tích kỹ thuật nổi tiếng, được giới thiệu bởi Ralph Nelson Elliott vào những năm 1930. Lý thuyết này cho rằng hành động giá trên thị trường tài chính không di chuyển một cách ngẫu nhiên, mà tuân theo một chuỗi các mô hình lặp đi lặp lại, gọi là các sóng.  1. Nguyên lý cơ bản của Sóng Elliott Sóng Elliott dựa trên hai yếu tố chính:  Tâm lý thị trường: Sóng phản ánh sự luân phiên giữa tâm lý lạc quan (bullish) và bi quan (bearish) của các nhà đầu tư. Mô hình sóng: Hành động giá di chuyển theo chu kỳ bao gồm các sóng đẩy (impulse waves) và sóng điều chỉnh (corrective waves). 2. Cấu trúc của Sóng Elliott Lý thuyết sóng Elliott chia giá thành hai giai đoạn chính:  Sóng Đẩy (Impulse Waves): Bao gồm 5 sóng (1, 2, 3, 4, 5) di chuyển theo hướng chính của xu hướng. Trong đó:  Sóng 1, 3, 5: Sóng tăng theo xu hướng chính. Sóng 2, 4: Sóng điều chỉnh (giảm) ngược với xu hướng chính. Sóng Điều Chỉnh (Corrective Waves): Bao gồm 3 sóng (A, B, C) di chuyển ngược với xu hướng chính.  Sóng A, C: Thường giảm theo hướng điều chỉnh. Sóng B: Tăng tạm thời trong xu hướng điều chỉnh. 3. Nguyên tắc của Sóng Elliott Khi áp dụng lý thuyết Sóng Elliott, cần tuân thủ một số nguyên tắc cơ bản:  Sóng 2 không được vượt quá điểm bắt đầu của Sóng 1. Sóng 3 không bao giờ là sóng ngắn nhất trong các sóng 1, 3, 5. Sóng 4 không được chồng lên vùng giá của Sóng 1 (trong xu hướng lý tưởng). 4. Fibonacci và Sóng Elliott Sóng Elliott thường kết hợp với các mức Fibonacci để dự đoán mức thoái lui (retracement) hoặc mục tiêu giá. Một số tỷ lệ Fibonacci phổ biến trong sóng Elliott:  Sóng 2 thường thoái lui 50%-61.8% của Sóng 1. Sóng 4 thường thoái lui 23.6%-38.2% của Sóng 3. Sóng 5 thường bằng 61.8%-100% của Sóng 1. 5. Ứng dụng Sóng Elliott trong giao dịch Xác định xu hướng: Sóng Elliott giúp nhà giao dịch nhận diện xu hướng chính và điểm đảo chiều tiềm năng. Dự đoán mục tiêu giá: Dựa vào cấu trúc sóng và mức Fibonacci, nhà giao dịch có thể dự đoán các mức giá tiếp theo. Chiến lược giao dịch: Mua trong Sóng 2 hoặc Sóng 4 (điều chỉnh) để hưởng lợi từ Sóng 3 hoặc Sóng 5 (đẩy). Bán trong Sóng A hoặc Sóng C khi xu hướng chính đã kết thúc. 6. Hạn chế của Sóng Elliott Mang tính chủ quan: Việc nhận diện sóng phụ thuộc vào cách quan sát của từng cá nhân. Khó áp dụng trong thị trường biến động mạnh: Trong thị trường không có xu hướng rõ ràng, việc xác định các sóng trở nên phức tạp. 7. Ví dụ minh họa Nếu một thị trường đang trong xu hướng tăng:  Sóng 1: Một đợt tăng ban đầu, thường không được chú ý nhiều. Sóng 2: Điều chỉnh giảm nhưng không vượt qua điểm bắt đầu Sóng 1. Sóng 3: Đợt tăng mạnh nhất và dài nhất, thu hút nhiều nhà đầu tư. Sóng 4: Điều chỉnh nhẹ, tâm lý thị trường vẫn tích cực. Sóng 5: Một đợt tăng cuối cùng, thường kém mạnh mẽ hơn Sóng 3. Sau đó, thị trường bước vào giai đoạn điều chỉnh với Sóng A, B, C. Sóng Elliott là công cụ mạnh mẽ để phân tích thị trường, nhưng cần kết hợp với các chỉ báo kỹ thuật khác và quản lý rủi ro cẩn thận để đạt hiệu quả tốt nhất.', 900, 999, 'Sóng Elliott là một lý thuyết phân tích kỹ thuật nổi tiếng, được giới thiệu bởi Ralph Nelson Elliott vào những năm 1930. Lý thuyết này cho rằng hành động giá trên thị trường tài chính không di chuyển một cách ngẫu nhiên, mà tuân theo một chuỗi các mô hình', 2),
(71, 'Bull and Bear Rule', 'https://i.pinimg.com/736x/5a/0a/5f/5a0a5fb3f36b9dc327d33c88df033424.jpg', '', 'Học cơ bản tới nâng cao Luật Bò Gấu, có thể tự tuỳ biến thành nhiều phương pháp, cách đầu tư dài hạn Chứng khoán và Crypto hiệu quả', 50, 996, 'Học cơ bản tới nâng cao Luật Bò Gấu, có thể tự tuỳ biến thành nhiều phương pháp, cách đầu tư dài hạn Chứng khoán và Crypto hiệu quả', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT 'not set',
  `age` int(10) DEFAULT 18,
  `role` int(10) DEFAULT 555
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `password`, `email`, `fname`, `age`, `role`) VALUES
(22, '6c7ca1e10436b8adc6a73d42b5d81f77', 'namduy2210z@gmail.com', 'admin', 18, 555),
(23, 'e10adc3949ba59abbe56e057f20f883e', 'admin@gmail.com', 'admin', 18, 555),
(24, '6c7ca1e10436b8adc6a73d42b5d81f77', 'huh@gmail.com', 'Huh', 18, 555),
(25, 'e10adc3949ba59abbe56e057f20f883e', 'aa@gmail.com', 'â', 18, 555);

--
-- Chỉ mục cho các bảng đã đổ
--

-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_users1_idx` (`user_id`);

--
-- Chỉ mục cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_has_products_products1_idx` (`product_id`),
  ADD KEY `fk_orders_has_products_orders1_idx` (`order_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`cat_id`);
ALTER TABLE `products` ADD FULLTEXT KEY `description` (`description`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--
--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=246;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Các ràng buộc cho các bảng đã đổ
--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `fk_orders_has_products_orders1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
