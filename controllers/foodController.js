// foodController.js

const foodService = require("../services/foodService");

/**
 * Tạo một món ăn mới.
 * @param {Object} req - Yêu cầu HTTP từ client, chứa thông tin món ăn trong body.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const createFood = async (req, res) => {
    try {
        const { ten_mon_an, nguyen_lieu, cach_nau } = req.body;

        // Kiểm tra xem thông tin món ăn có được cung cấp đầy đủ không
        if (!ten_mon_an || !nguyen_lieu || !cach_nau) {
            return res.status(400).json({ error: "Tên món ăn, nguyên liệu và cách nấu là bắt buộc." });
        }

        const newFood = { ten_mon_an, nguyen_lieu, cach_nau };
        const createdFood = await foodService.createFood(newFood);

        res.status(201).json(createdFood);
    } catch (error) {
        console.error("Error creating food:", error);
        res.status(500).json({ error: "Lỗi máy chủ." });
    }
};

/**
 * Lấy tất cả các món ăn từ cơ sở dữ liệu.
 * @param {Object} req - Yêu cầu HTTP từ client.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const getAllFoods = async (req, res) => {
    try {
        const foods = await foodService.getAllFoods();
        res.status(200).json({ msg: "Loading food success.", foods });
    } catch (error) {
        console.error("Error fetching all foods:", error);
        res.status(500).json({ error: "Failed to load foods." });
    }
};

/**
 * Lấy thông tin về một món ăn dựa trên ID.
 * @param {Object} req - Yêu cầu HTTP từ client, chứa ID món ăn trong params.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const getFoodById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID không hợp lệ." });
        }

        const food = await foodService.getFoodById(id);

        if (!food) {
            return res.status(404).json({ error: "Món ăn không tồn tại." });
        }

        res.status(200).json(food);
    } catch (error) {
        console.error("Error fetching food by id:", error);
        res.status(500).json({ error: "Lỗi máy chủ." });
    }
};

/**
 * Lấy thông tin về một món ăn ngẫu nhiên trong cơ sở dữ liệu.
 * @param {Object} req - Yêu cầu HTTP từ client.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const getRandomFood = async (req, res) => {
    try {
        const food = await foodService.getRandomFood();
        res.status(200).json(food);
    } catch (error) {
        console.error("Error fetching random food:", error);
        res.status(500).json({ error: "Failed to load random food." });
    }
};

/**
 * Cập nhật thông tin món ăn theo ID.
 * @param {Object} req - Yêu cầu HTTP từ client, chứa ID món ăn trong params và dữ liệu cập nhật trong body.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const updateFoodById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID không hợp lệ." });
        }

        const updatedFood = await foodService.updateFoodById(id, updateData);

        if (!updatedFood) {
            return res.status(404).json({ error: "Món ăn không tồn tại." });
        }

        res.status(200).json(updatedFood);
    } catch (error) {
        console.error("Error updating food:", error);
        res.status(500).json({ error: "Lỗi máy chủ." });
    }
};

/**
 * Xóa món ăn theo ID.
 * @param {Object} req - Yêu cầu HTTP từ client, chứa ID món ăn trong params.
 * @param {Object} res - Đáp ứng HTTP gửi về client.
 */
const deleteFoodById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID không hợp lệ." });
        }

        const deletedFood = await foodService.deleteFoodById(id);

        if (!deletedFood) {
            return res.status(404).json({ error: "Món ăn không tồn tại." });
        }

        res.status(200).json({ msg: "Xóa món ăn thành công.", deletedFood });
    } catch (error) {
        console.error("Error deleting food:", error);
        res.status(500).json({ error: "Lỗi máy chủ." });
    }
};

/**
 * Thêm nhiều món ăn.
 * @param {Array} req - Yêu cầu HTTP từ client, chứa mảng món ăn trong params.
 * @param {Array} res - Đáp ứng HTTP gửi về client.
 */
const createManyFood = async (req, res) => {
    const foodData = req.body;
    try {
        const newFoods = await foodService.createManyFood(foodData);
        return res.status(200).json({ message: "Thêm dữ liệu thành công" });
    } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
        return res.status(500).json({ error: "Lỗi khi thêm dữ liệu" });
    }
};

module.exports = {
    createFood,
    getAllFoods,
    getFoodById,
    getRandomFood,
    updateFoodById,
    deleteFoodById,
    createManyFood,
};
