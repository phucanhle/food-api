const mongoose = require("mongoose");

let connection; // Biến toàn cục để lưu trữ kết nối

exports.connect = async (uri) => {
    if (connection) {
        // Kiểm tra xem kết nối đã được thiết lập chưa
        console.log("Đã kết nối với MongoDB");
        return;
    }

    try {
        // Kết nối với cơ sở dữ liệu MongoDB
        connection = await mongoose.connect(uri);
        console.log("Kết nối với MongoDB thành công");
    } catch (error) {
        console.error("Lỗi kết nối với cơ sở dữ liệu:", error);
        process.exit(1); // Thoát khỏi chương trình nếu kết nối thất bại
    }
};
