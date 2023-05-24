function solution(arr) {
 // 최소 공배수 : 값들의 전체 곱/최대공약수
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

// 최대 공약수
function getGcd(a, b) {
  return a % b ? getGcd(b, a % b) : b;
}