function solution(n, s) {
    if(n > s) return [-1]

    const answer = new Array(n).fill(Math.floor(s / n))
    for(let i = 0; i < s % n; i ++)
        answer[answer.length - 1 - i]++;
  
    return answer;
}