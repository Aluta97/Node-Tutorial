
var fs = require("fs");
//reading files in a folder...
var filesInFolder = fs.readdirSync("./files/week1");

// loop through all the files - then you have the file name
  // still in your loop - read the file contents
var linesInFiles = [];//empty array for the content
      //using the forEach method to read files in a folder
    filesInFolder.forEach(function(filesInFolder){

      var content = fs.readFileSync("./files/week1/" + filesInFolder, "utf8");
        var lines = content.split('\n');//spliting the content
        lines.forEach(function(line){ //to make each content in the array
            linesInFiles.push(line); //push the lines into the array
        });
  });

  console.log (linesInFiles);


//using export to get the lines sync
  exports.linesInFiles = function(folderName){
      return linesInFiles;
};

  exports.linesInFilesAsync = function(folderName, callback){
    callback(null, linesInFiles);
//
        return linesInFiles;
};
