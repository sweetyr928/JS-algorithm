function solution(citations) {
    let ans = 0
    citations.sort((a,b) => b-a)
    
    while(true){
        if(citations.filter(el => el >= ans).length < ans) break;
        ans++;
    }
    
    return ans-1;
}