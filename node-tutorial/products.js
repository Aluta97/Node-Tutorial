var fs = require("fs");

var products = [];

    var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
    var lines = listInFiles.split('\n');
    products.push(lines);

    console.log(products);
