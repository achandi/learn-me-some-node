var fs = require('fs');
var path  = require('path');

var dirname = process.argv[2];
var ext = "."+ process.argv[3];

fs.readdir(dirname, function(err, files) {
    for (var i = 0; i < files.length - 1; i++) {
      if (path.extname(files[i]) == ext) {
        console.log(files[i]);
      }
     }
});


