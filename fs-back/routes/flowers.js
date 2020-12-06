const router = require("express").Router();

let Flower = require("../models/flower.model");

router.route("/").get((req, res) => {
  Flower.find()
    .then(() => res.json(flowers))
    .catch((err) => res.status(400).json("erros: " + err));
});

router.route("/add").post((req, res) => {
  const breed = req.body.breed;
  const price = req.body.price;
  const availability = req.body.availability;
  const inventory = req.body.inventory;

  const newFlower = new Flower({
    breed,
    price,
    availability,
    inventory,
  });

  newFlower
    .save()
    .then(() => res.json("New flower added"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/update/:id").post((req, res) => {
  //This function needs to be completed to get the info for the
  //flower to update it (findByIdAndUpdate)
});

router.route("/:id").remove((req, res) => {
  Flower.findByIdAndDelete(req.params.id)
    .then((res) => res.json(`Flower ${req.params.id} has been deleted`))
    .catch((err) => res.status(400).json("error: " + err));
});
