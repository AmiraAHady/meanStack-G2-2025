// import fileSys from 'fs';
// const fileSys = require("fs");
const http = require("http");
let products = require("./productsData.json");
//req->Request
//res->Response
// menu=APIs=EndPoints
// path,method
// /products ,GET
// /product/1 ,GET
// task
// update,delete

const server = http.createServer((req, res) => {
  if (req.url == "/products" && req.method == "GET") {
    res.end(JSON.stringify(products));
  } else if (req.method == "GET" && req.url.startsWith("/product/")) {
    let id = +req.url.split("/")[2];
    let product = products.find((item) => item.id == id);
    if (product) {
      res.end(JSON.stringify(product));
    } else {
      res.end("No Product Founded With this id");
    }
  } else if (req.method == "POST" && req.url == "/addProduct") {
    // chuncks
    let reqBody = "";
    req.on("data", (chunck) => {
      reqBody += chunck;
    });

    req.on("end", () => {
      let newProduct = JSON.parse(reqBody);
      newProduct.id = products.length + 1;
      console.log(newProduct);
      products.push(newProduct);
      res.end(`Product add Successfully : ${newProduct.id}`);
    });
  }
});

//localhost,portNumber

server.listen(3000, () => {
  console.log("Server Connected");
});

// fileSys.readFile("task.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// let data = `hello from Node js
// this is dummy text`;
// fileSys.writeFile("task2.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
