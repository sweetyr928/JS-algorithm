function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b))
}

function getGcd(a, b) {
  return a % b ? getGcd(b, a % b) : b
}