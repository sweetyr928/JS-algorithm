const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(" ")

solution(input)

function solution (input) {
  console.log((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 1 : 0)
}