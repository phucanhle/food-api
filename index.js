const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");

const app = express();
env.config();

const router = require("./routes");
const database = require("./db");
const port = process.env.PORT || 3000;
const mongodbUri = process.env.URI_MONGODB;

// Kết nối đến cơ sở dữ liệu MongoDB
database.connect(mongodbUri);

// Sử dụng body-parser để phân tích dữ liệu JSON từ request body
app.use(bodyParser.json());

// Cấu hình CORS cho ứng dụng
app.use(cors());

// Route mặc định trả về "Hello World"
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// Sử dụng router từ các routes được định nghĩa trong thư mục routes
app.use("/api", router);

// Lắng nghe các kết nối trên cổng được chỉ định
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
});
