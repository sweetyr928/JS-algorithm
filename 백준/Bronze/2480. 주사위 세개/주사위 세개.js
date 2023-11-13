const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split(" ")

solution(input)

function solution (input) {
  const [first, second, last] = input
  let money = 0

  if(first === second && first === last && second === last) money = (first * 1000) + 10000
  else if(first === second || first === last) money = (first * 100) + 1000
  else if(second === last) money = (second * 100) + 1000
  else money = Math.max(first, second, last) * 100

  console.log(money)
}