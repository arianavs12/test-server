const router = require("express").Router();
const allUsers = require ('./User.routes');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use('/all', allUsers);

module.exports = router;
