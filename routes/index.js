const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

router.use("/addTask", require("./addTask"));
router.use("/deleteTask", require("./deleteTask"));
router.use("/checkTask", require("./checkTask"));

module.exports = router;
