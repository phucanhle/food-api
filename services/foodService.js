// foodService.js
const Food = require("../models/Food");

/**
 * Tạo một món ăn mới và lưu vào database.
 * @param {Object} newFoodData - Dữ liệu món ăn mới.
 * @returns {Object} - Đối tượng món ăn đã được lưu.
 * @throws {Error} - Ném lỗi nếu quá trình tạo món ăn thất bại.
 */
const createFood = async (newFoodData) => {
    try {
        const newFood = new Food(newFoodData);
        return await newFood.save();
    } catch (error) {
        console.error("Error creating food:", error);
        throw error;
    }
};

/**
 * Lấy tất cả các món ăn từ database.
 * @returns {Array} - Danh sách tất cả các món ăn.
 * @throws {Error} - Ném lỗi nếu quá trình lấy dữ liệu thất bại.
 */
const getAllFoods = async () => {
    try {
        return await Food.find();
    } catch (error) {
        console.error("Error fetching all foods:", error);
        throw error;
    }
};

/**
 * Lấy thông tin món ăn theo ID.
 * @param {String} id - ID của món ăn.
 * @returns {Object|null} - Đối tượng món ăn hoặc null nếu không tìm thấy.
 * @throws {Error} - Ném lỗi nếu quá trình lấy dữ liệu thất bại.
 */
const getFoodById = async (id) => {
    try {
        return await Food.findById(id);
    } catch (error) {
        console.error("Error fetching food by id:", error);
        throw error;
    }
};

/**
 * Lấy ngẫu nhiên một món ăn từ danh sách các món ăn.
 * @returns {Object} - Đối tượng món ăn ngẫu nhiên.
 * @throws {Error} - Ném lỗi nếu không tìm thấy món ăn hoặc quá trình lấy dữ liệu thất bại.
 */
const getRandomFood = async () => {
    try {
        const allFoods = await Food.find();

        // Kiểm tra nếu không có món ăn nào trong database
        if (allFoods.length === 0) {
            throw new Error("No food items found");
        }

        const randomIndex = Math.floor(Math.random() * allFoods.length);
        return allFoods[randomIndex];
    } catch (error) {
        console.error("Error fetching random food:", error);
        throw error;
    }
};

/**
 * Cập nhật thông tin món ăn theo ID.
 * @param {String} id - ID của món ăn.
 * @param {Object} updateData - Dữ liệu cập nhật món ăn.
 * @returns {Object|null} - Đối tượng món ăn đã cập nhật hoặc null nếu không tìm thấy.
 * @throws {Error} - Ném lỗi nếu quá trình cập nhật thất bại.
 */
const updateFoodById = async (id, updateData) => {
    try {
        return await Food.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        console.error("Error updating food:", error);
        throw error;
    }
};

/**
 * Xóa món ăn theo ID.
 * @param {String} id - ID của món ăn.
 * @returns {Object|null} - Đối tượng món ăn đã bị xóa hoặc null nếu không tìm thấy.
 * @throws {Error} - Ném lỗi nếu quá trình xóa thất bại.
 */
const deleteFoodById = async (id) => {
    try {
        return await Food.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error deleting food:", error);
        throw error;
    }
};

/**(
 * Thêm hàng loạt món
 * @param {Array} foodData - Danh sách món ăn
 * @return {Array} - Danh sách các đối tượng đã tạo
 * @throws {Error} - Ném lỗi nếu quá trình tạo lỗi
 */
const createManyFood = async (foodData) => {
    try {
        for (let i = 0; i < foodData.length; i++) {
            const newFood = new Food(foodData[i]);
            await newFood.save();
            console.log("Dữ liệu thêm vào thành công:", newFood);
        }
    } catch (error) {
        console.error("Lỗi khi thêm dữ liệu:", error);
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
