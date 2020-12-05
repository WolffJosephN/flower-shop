const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/create").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const addresses = req.body.addresses;

  const newUser = new User({ username, email, password, addresses });

  newUser
    .save()
    .then(() => res.json("New user created"))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
