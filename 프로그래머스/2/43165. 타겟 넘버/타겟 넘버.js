function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (total, newNum) => {
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