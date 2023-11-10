const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  if (input[0] > 0) {
    console.log(input[1] > 0 ? "1" : "4");
  } else {
    console.log(input[1] > 0 ? "2" : "3");
  }
}
