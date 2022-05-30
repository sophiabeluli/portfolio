var express = require("express");
var router = express.Router();

/* GET resume page. */
router.get("/", function (req, res, next) {
    res.sendFile("tekside.html", {
        root: "public/html",
    });
});

module.exports = router;
