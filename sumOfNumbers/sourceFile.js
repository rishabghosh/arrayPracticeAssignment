const sum = require("./lib").sum;
const numbers = require("./numbers").numbers.split(",");
const convToNumbers = numbers.map( (num)=>{ return +num } ); 

console.log( sum(convToNumbers) );
