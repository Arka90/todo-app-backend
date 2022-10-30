const express = require("express");

const router = express.Router();

const checkTaskController = require("../controllers/checkTask_controller");

router.get("/", checkTaskController.check);

module.exports = router;
