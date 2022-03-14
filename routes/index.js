const express = require("express"),
    router = express.Router();


router.use(
    "/api",
    require("./api")
);

router.use(
    "/",
    require("./robot")
);

module.exports = router;
