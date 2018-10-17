const reverseFibo = require('./reverseFiboLib.js').reverseFibo;

let inputLength = +process.argv[2];
console.log(reverseFibo(inputLength));
