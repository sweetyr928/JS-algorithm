function solution(n) {
   let fib = [0,1]
   
   if(n<2) return fib[n]
    
   for(let i=2;i<=n;i++){
       fib.push((fib[i-1] + fib[i-2]) % 1234567 )
   }
    
    return fib[n]
}