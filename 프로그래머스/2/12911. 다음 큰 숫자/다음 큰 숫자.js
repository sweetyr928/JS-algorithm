function solution(n) {
    let nextNum = n + 1
    
    while(true){
        if(n.toString(2).split('').filter(el=> el>0).length 
           === nextNum.toString(2).split('').filter(el=> el>0).length) break
        nextNum += 1
    }
    
    return nextNum
}