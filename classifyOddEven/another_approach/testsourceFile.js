const numbers = require("./listOfNUmbers").numbers.split(",");

const list = require("./testLib.js").classifyNumbers(numbers);

console.log("even numbers = " + list.evens);
console.log("odd numbers = " + list.odds);
