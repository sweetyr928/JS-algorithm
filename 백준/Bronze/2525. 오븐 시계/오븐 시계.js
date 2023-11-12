const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [hour, min] = input[0].split(" ");

solution(Number(hour), Number(min), Number(input[1]));

function solution(hour, min, time) {
  let totalMin = hour * 60 + min + time;
  let hourResult = Math.floor(totalMin / 60) % 24;
  let minResult = totalMin % 60;

  console.log(hourResult, minResult);
}
