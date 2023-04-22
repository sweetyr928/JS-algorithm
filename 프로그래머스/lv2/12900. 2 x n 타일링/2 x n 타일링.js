function solution(n) {
    let answer = 0;
    let dp = [0,1,2];
    for(let i=3;i<=n;i++){
        dp[i] = (dp[i-1] % 1000000007 + dp[i-2] % 1000000007) % 1000000007;
    }
    
    return dp[n] % 1000000007;
}
// const solution = (n) => {
//   const arr = [];
//   arr.push(0, 1, 2);
//   for (let i = 3; i <= n; i++) {
//     arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
//   }
//   return arr[n];
// };