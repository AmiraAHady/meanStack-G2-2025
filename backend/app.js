let products = require("./productsData.json");
const express = require("express");
const server = express(); //server=creatServer

// task make apis that match:
// ->update single product
// ->update all products with category==Mobiles make them Electronics (from Mobiles to Electronics)
// ->delete all products



// middleware
// next->forward
server.use(express.json());

// first match wins
// APIs->EndPoints
// /products,GET
server.get("/", (req, res) => {
  res.send(products);
});
// server.get("/", (req, res) => {
//   let category = req.query.category;
//   if (category) {
//     let result = products.filter((product) => product.category == category);
//     res.send(result);
//   } else {
//     res.send(products);
//   }
// });
// Query string
// category=Mobiles
// ?key=value&key=value
// http://localhost:3000/products?category=Mobiles$minPrice=1000
server.get("/products", (req, res) => {
  let result = products;
  let category = req.query.category;
  let minPrice = +req.query.minPrice;
  if (category) {
    result = products.filter((product) => product.category == category);
  }
  if (minPrice) {
    result = result.filter((product) => product.price >= minPrice);
  }

  res.send(result);
});

// /products/id ,GET
// Query params
server.get("/products/:id", (req, res) => {
  console.log(req.params);
  let id = +req.params.id;
  let product = products.find((prod) => prod.id == id);
  if (product) {
    res.send(product);
  } else {
    res.send(`No Product Founded with this id :${req.params.id}`);
  }
});

// /addproduct  POST
// body ->data
// create
//
server.post("/addproduct", (req, res) => {
  let newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.send("product added successfully");
});

// delete product ,id
server.delete("/delete/:id", (req, res) => {
  let id = +req.params.id;
  let result = products.findIndex((prod) => prod.id == id);
  if (result == -1) {
    res.send(`No Product Founded with this id :${req.params.id}`);
  }
  products = products.filter((product) => product.id != id);
  res.send({ message: "Product deleted successfully", productList: products });
});

server.listen(3000, () => {
  console.log("server connected");
});
