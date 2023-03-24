const btn = document.querySelector("#btn");
let num = document.querySelector("#number");
let result = document.querySelector("#result");

const testNum = 15
num.innerHTML = testNum

function convert() {
  let res = 0
  const numbers = [
    [2], // 1
    [2*2], // 4
    [2*2*2], // 8
    [2*2*2*2], // 16
  ]
  // loop through the array
  for (let i = 0; i < numbers.length; i++) {
    // check if the current number is even
    if (numbers[i] % 2 === 0) {
      // add it to the sum
      res += "1";
    } else if (numbers[i] % 2 === 1) {
      res += "0";
    }
  }
  return console.log(result.innerHTML = res)
}

btn.addEventListener('click', convert)
