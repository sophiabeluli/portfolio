var express = require("express");
var router = express.Router();

/* GET resume page. */
router.get("/", function (req, res, next) {
    res.sendFile("tigercat.html", {
        root: "public/html",
    });
});

module.exports = router;
