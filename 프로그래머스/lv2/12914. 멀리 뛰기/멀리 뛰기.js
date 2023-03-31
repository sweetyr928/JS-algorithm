function solution(n) {
    let df = [0,1,1];
    
    for(let i=3;i<=n+1;i++){
        df[i] = (df[i-1] + df[i-2]) % 1234567;
    }
    
    return df[n+1];
}