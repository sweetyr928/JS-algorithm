function solution(numbers, target) {
    // dfs 문제. 파라미터는 총 합, 남은 배열
    // 모든 경우 중 결과가 target과 같은 경우만 세기
    let answer = 0;
    
    const dfs = (total, newNum) => {
        // 엣지 케이스
        if(!newNum.length){
            if(total === target){
                answer++;
                return;
            }
        }else{
            let cur = newNum[0];
            let newNumbers = newNum.slice();
            newNumbers.shift();
            dfs(total + cur, newNumbers);
            dfs(total - cur, newNumbers);
        }
    }
    
    dfs(0, numbers);
    
    return answer;
}