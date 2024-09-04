function solution(x, y, n) {
    if(x === y) return 0;
    
    const dp = {};
    dp[x] = 0;
    
    let candidate = [x];
    
    while(candidate.length){
        const newCan = [];
        for (const el of candidate){
            for(const c of [el + n, el * 2, el *3 ]){
                if(c > y || dp[c]) continue;
                if(c === y) return dp[el] + 1;
                
                dp[c] = dp[el] + 1;
                newCan.push(c);
            }
        }
        candidate = newCan;
    }
    
    return -1;
}