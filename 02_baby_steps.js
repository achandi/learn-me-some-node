var y = process.argv;
var z = 0;
for (var x = 2; x < y.length; x++ ) {
  z += +y[x];
}

console.log(z);

