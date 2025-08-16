let Product = require("../models/product");
const express = require("express");
let router = express.Router();
// http://localhost:3000/products/
router.get("/", (req, res) => {
  Product.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error gettting Data");
    });
});
//  http://localhost:3000/products/list
router.get("/list", (req, res) => {
  console.log("hello");
  let category = req.query.category;
  let minPrice = +req.query.minPrice;
  console.log(category, minPrice);
  Product.find({ category: category, price: { $gte: minPrice } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error gettting Data");
    });
});
//   http://localhost:3000/products/:id
router.get("/:id", (req, res) => {
  let reqId = +req.params.id;
  Product.findOne({ id: reqId })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Product Founded with this iD");
      }
    })
    .catch((err) => {
      res.send("Error gettting Data");
    });
});

module.exports = router;
