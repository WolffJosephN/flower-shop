const router = require("express").Router();

let Flower = require("../models/flower.model");

router.route("/").get((req, res) => {
  Flower.find()
    .then((flowers) => res.json(flowers))
    .catch((err) => res.status(400).json("erros: " + err));
});

router.route("/add").post((req, res) => {
  const breed = req.body.breed;
  const price = Number(req.body.price);
  const availability = req.body.availability;
  const inventory = Number(req.body.inventory);

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
  Flower.findByIdAndUpdate(req.params.id)
    .then((flower) => {
      flower.breed = req.body.breed;
      flower.price = Number(req.body.price);
      flower.availability = req.body.availability;
      flower.inventory = Number(req.body.inventory);

      flower
        .save()
        .then(() => res.json("Flower has been updated"))
        .catch((err) => res.status(400).json("error: " + err));
    })
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/:id").delete((req, res) => {
  Flower.findByIdAndDelete(req.params.id)
    .then((res) => res.json(`Flower ${req.params.id} has been deleted`))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
