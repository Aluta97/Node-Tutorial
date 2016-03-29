var fs = require("fs");

module.exports = function(filepath) { //always make sure that you export the module so that its gonna be visible

  this.productNames = function(callback) { //ccallback tells me that I am reading the file Asynch

    var products = [];
    var map = {};

    //reading the csv file
    var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
    var lines = listInFiles.split('\n');
    // products.push(lines);

    //using the forEach to go through the new lines youve splitted..
    lines.forEach(function(lines) {
      var productName = lines.split(",")[1]; //splitting the lines
      if (map[productName] === undefined) { //if the product is already there then do not push it to the array again
        products.push(productName); //pushing the names to the array
        map[productName] = 0; // always initialise your map
      }

    });


    callback(null, products);

   };
  //


  this.productsSold = function(callback) {

      var product = {};

      //reading the csv file
         var list = fs.readFileSync('./files/products.csv', 'utf8');
         //spliting items
         var lines = list.split('\n');
         //creating an empty map
         var products = {};
         //creating forEach loop that loops through the products
        lines.forEach(function(line) {

             var productName = line.split(",")[1];
             var productSold = Number(line.split(",")[2]); //we use Number to change the string to a number
         // creating an if/else statement
           if  (products[productName] === undefined){
             products[productName] = productSold;
           }
            else {
                   products[productName] += productSold;
           }

         });
          callback(null, products);

        }
};
