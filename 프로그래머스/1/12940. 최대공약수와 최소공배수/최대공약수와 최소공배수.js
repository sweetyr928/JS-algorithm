function solution(n, m) {
    let answer = []
    let a = []
    for(let i = 1;i <= n;i++){
        if(n % i == 0 && m % i == 0){
            a.push(i)
        }
    }
    answer.push(a[a.length-1])
    for(let j = m;j <= 1000000;j++){
        if(j % n == 0 && j % m == 0){
            answer.push(j)
            break
        }
    }
    
    return answer
}