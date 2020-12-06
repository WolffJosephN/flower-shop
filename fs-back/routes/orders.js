const router = require("express").Router();

let Order = require("../models/order.model");

router.route("/:id").get((req, res) => {
  //This get method may need to change later on down the road.
  //Depending on the application, we may only need to get the
  //orders under certain circumstances such as a previous orders
  //Page for the user or getting the orders that have been created
  //during a certain tim period for the business.
  //for now, I am probably just going to get the orders specifically when
  //I need them. I will worry about the rest later.
});
