const express = require("express"),
    router = express.Router(),
    {
        whereIsRobot
    } = require("../../controllers/robot"),
    validator = require("../../validators");

router.post(
    "/",
    validator("calculate"),
    whereIsRobot
)

module.exports = router;