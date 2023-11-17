function solution(s){
    let q = []
    
    if(s[0] === ')') return false
    
    for(let i=0;i<s.length;i++){
        if(s[i] === '(') q.push(s[i])
        else q.pop()
    }
    
    return !(q.length)
}