const express = require("express"),
    router = express.Router();

router.use(
    "/calculate",
    require("./calculate")
);

module.exports = router;
