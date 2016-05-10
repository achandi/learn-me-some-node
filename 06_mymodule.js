var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extension, callback) {
  fs.readdir(dirname, function(err, files) {
    if (err) return callback(err); 
    else {
     files = files.filter(function(file) {
          if(path.extname(file) === '.' + extension) return true;
      });
      return callback(null, files);

    }
  });

};




