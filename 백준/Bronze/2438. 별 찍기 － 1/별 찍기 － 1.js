const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

solution(input)

function solution (input) {
  let star = ''
  for(let i = 1; i <= input; i++) {
    star = ''
    for(let j = 1; j <= i; j++) {
      star += '*'
    }
    console.log(star)
  }
}