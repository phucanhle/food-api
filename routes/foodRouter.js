// foodsRouter.js

const express = require("express");
const foodController = require("../controllers/foodController");
const foodsRouter = express.Router();

// Định nghĩa các route cho các thao tác CRUD của món ăn
foodsRouter.get("/", foodController.getAllFoods); // Lấy tất cả các món ăn
foodsRouter.get("/random", foodController.getRandomFood); // Lấy một món ăn ngẫu nhiên
foodsRouter.get("/:id", foodController.getFoodById); // Lấy thông tin một món ăn dựa trên ID
foodsRouter.post("/", foodController.createFood); // Tạo một món ăn mới
foodsRouter.post("/many", foodController.createManyFood); // Tạo nhiều món ăn mới
foodsRouter.put("/:id", foodController.updateFoodById); // Cập nhật thông tin một món ăn dựa trên ID
foodsRouter.delete("/:id", foodController.deleteFoodById); // Xóa một món ăn dựa trên ID

module.exports = foodsRouter;
