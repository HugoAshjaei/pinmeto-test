const express = require("express"),
    {
        servePage
    } = require('../../controllers/robot'),
    router = express.Router();

router.get(
    "/",
    servePage
);

module.exports = router;