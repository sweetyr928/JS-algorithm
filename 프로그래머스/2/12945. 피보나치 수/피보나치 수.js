function solution(n) {
   let fibo = [0,1]
   
   if(fibo[n]) return fibo[n]
   
   for(let i=2;i<=n;i++){
       fibo[i] = ( fibo[i-1] + fibo[i-2] ) % 1234567
   }
    
    return fibo[n]
}