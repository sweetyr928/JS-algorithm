function solution(numbers, target) {
    let ans = 0;

    const dfs = (idx,sum) => {
       if(idx === numbers.length){
           if(sum === target) ans++;
           return;
       }
        
        dfs(idx+1,sum+numbers[idx]);
        dfs(idx+1,sum-numbers[idx]);
    }
    
    dfs(0,0);
    
    return ans;
}

