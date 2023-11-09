const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(input) {
  console.log(Number(input[0]) + Number(input[1]));
}
