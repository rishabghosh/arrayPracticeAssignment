const reverseFibo = require('./lib.js').reverseFibo;

let inputLength = +process.argv[2];
console.log(reverseFibo(inputLength));
