function solution(n, s) {
    if(n > s) return [-1]

    const ans = new Array(n).fill(Math.floor(s / n))
    
    for(let i = 0; i < s % n; i ++)
        ans[ans.length - 1 - i]++
  
    return ans
}