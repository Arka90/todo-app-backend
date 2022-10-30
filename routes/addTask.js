const express = require("express");

const router = express.Router();

const addTaskController = require("../controllers/addTask_controller");

router.get("/", addTaskController.add);

module.exports = router;
