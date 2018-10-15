const listOfNumbers = require("./listOfNUmbers").numbers.split(",");
const listOfEvens = require("./lib.js").even(listOfNumbers);
const listOfOdds = require("./lib.js").odd(listOfNumbers);
let classifiedNumbers = {};

console.log("Odd Numbers = " + listOfOdds);
console.log("Even Numbers = " + listOfEvens);

classifiedNumbers["evens"] = listOfEvens;
classifiedNumbers["odds"] = listOfOdds;

console.log(classifiedNumbers);
