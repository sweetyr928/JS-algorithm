function solution(n, k) {
    let answer = []
    let arr = new Array(n).fill(1)
    for (let i=1;i<n;i++) arr[i] = arr[i-1]+1
    let nth = k-1
    
    while(arr.length){
        if(nth === 0){
            answer.push(...arr)
            break
        }
        let turn = fact(arr.length-1)
        let idx = nth/turn >> 0
        nth = nth%turn
        answer.push(arr[idx])
        arr.splice(idx,1)
    }
    
    return answer
}

function fact(n) {
    if(n<=1) return n
    
    return n * fact(n-1)
}