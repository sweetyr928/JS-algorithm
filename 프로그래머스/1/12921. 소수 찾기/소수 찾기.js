function solution(n) {
    var answer = 1;
    if (n == 2){
        return answer;
    }
    for (let i = 3;i <= n;i+=2){
        let isPrime = true;
        for (let j = 3;j <= Math.sqrt(i); j+=2){
            if(i % j == 0){
              	isPrime = false;
                break;
            }
        }
        
      if(isPrime){
        answer++;
      }
    }
    return answer;
}