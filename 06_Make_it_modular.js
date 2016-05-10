var mymodule = require('./06_mymodule.js');
var path = require('path');
var dirname = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list) {
  if (err) throw err;
  list.forEach(function (file) {
    console.log(file);
  });
};

mymodule(dirname, ext, callback);


