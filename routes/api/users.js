const express = require("express");
const { route } = require("./profile");
const router = express.Router();

//Load user model
const User = require("../../models/User");

//@route GET api/users/test
//@description Tests users route
//@access Public Route

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//@route GET api/users/register
//@desc register uer
//@access Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.eamil,
        avatar,
        password: req.body.password,
      });
    }
  });
});

module.exports = router;
