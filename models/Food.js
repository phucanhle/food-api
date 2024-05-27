const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    ten_mon_an: { type: String, required: true },
    nguyen_lieu: [
        {
            ten: { type: String, required: true },
            so_luong: { type: String, required: true },
        },
    ],
    cach_nau: [{ type: String, required: true }],
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
