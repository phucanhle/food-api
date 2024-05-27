const express = require("express");
const router = express.Router();
const foodRouter = require("./foodRouter");

router.use("/foods", foodRouter);

module.exports = router;
