const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productRoutes=require('./routes/product')
var cors = require('cors')
// mongoose
// atlas

mongoose
  .connect(
    ``
  )
  .then(() => {
    console.log(`Connected To DB`);
  })
  .catch((err) => {
    console.log(err);
  });

server.use(cors())  
server.use(express.json());
server.use('/products',productRoutes)



server.listen(3000, () => {
  console.log("server connected");
});
