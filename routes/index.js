var express = require("express");
var router = express.Router();
const font = require("../src/font");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {title: "Express"});
});

router.get("/font", async function (req, res, next) {
  if (!req.query.str) {
    res.send("str is required!");
    return;
  }
  const result = await font.format(req.query.str);
  if (!result.success) {
    res.send("format failed!");
    return;
  }
  res.send(result.data);
});

module.exports = router;
