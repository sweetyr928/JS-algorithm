const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(input) {
  if (input[1] >= 45) console.log(input[0], input[1] - 45);
  else {
    console.log(input[0] >= 1 ? input[0] - 1 : 23, 60 - (45 - input[1]));
  }
}
