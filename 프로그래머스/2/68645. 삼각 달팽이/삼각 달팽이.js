function solution(n) {
    let answer = []
    let arr = Array.from({length : n}, (_,idx) => new Array(idx+1).fill(0))
    let x = 0
    let y = -1
    let cur = 0
    
    while(n > 0){
        for(let i = 0;i < n;i++){ 
            y++
            cur++
            arr[y][x] = cur
        }
        for(let i = 0;i < n-1;i++){ 
            x++
            cur++
            arr[y][x] = cur
        }
        for(let i = 0;i < n-2;i++){ 
            x--
            y--
            cur++
            arr[y][x] = cur
        }
        n -= 3
    }
    
    for(let i = 0;i < arr.length;i++){
        answer = [...answer,...arr[i]]
    }
    
    return answer
}