function solution(A,B){
    let ans = 0;
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);
    
    for (let i=0;i<A.length;i++) ans += A[i] * B[i];
    
    return ans;
}