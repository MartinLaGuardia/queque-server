const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("¡CHÉVERE CAMBUR!");
});
module.exports = router;
