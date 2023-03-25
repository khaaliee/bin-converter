// textarea, css, alerts,
const btn = document.querySelector("#btn");
let num = document.querySelector("#number");
let result = document.querySelector("#result");

// convert to binary
function decConvert() {
  const number = parseInt(prompt("Enter a decimal number: "));
  result = (number >>> 0).toString(2);
  return console.log(result);
}

btn.addEventListener("click", decConvert);

/* Valid number systems for conversion include:

    Binary system (base 2) that has 2 digits, 0 and 1
    Ternary system (base 3) that has 3 digits 0, 1, and 2
    Quaternary system (base 4) that has 4 digits, 0, 1, 2 and 3
    And so on up to the Hexatridecimal system (base 36) that has the combination of 
    Arabic numerals 0 to 9 and Latin letters A to Z */

// convert to ternary
function dec2Tern() {
  const number = parseInt(prompt("Enter a decimal number: ")); // to html input
  result = (number >>> 0).toString(3);
  return console.log(result);
}

function dec2Quat() {
  const number = parseInt(prompt("Enter a decimal number: ")); // to html input
  result = (number >>> 0).toString(4);
  return console.log(result);
}
