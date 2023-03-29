function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (i,sum) => {
        if(i === numbers.length){
            if(sum === target) answer++;
        }else{
            dfs(i + 1, sum + numbers[i]);
            dfs(i + 1, sum - numbers[i]);
        }
    }
    
    dfs(0,0);
    
    return answer;
}