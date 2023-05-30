function solution(n, s) {
    if(n > s) return [-1];
    // 집합의 첫 요소를 s/n부터 시작하여 집합 요소 간의 편차 줄이기
    const answer = new Array(n).fill(Math.floor(s / n));
  	// s/n 나머지를 남은 요소들에게 나눠주기
    for(let i = 0; i < s % n; i ++)
        answer[answer.length - 1 - i]++;
  
    return answer;
}