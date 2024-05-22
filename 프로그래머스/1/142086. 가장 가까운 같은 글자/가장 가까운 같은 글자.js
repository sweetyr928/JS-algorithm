function solution(s) {
    let answer = []
    let obj = {}
    
    for(let i = 0;i < s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]] = [i]
            answer.push(-1)
        }else{
            answer.push(i-obj[s[i]][obj[s[i]].length-1])
            obj[s[i]] = [...obj[s[i]],i]
        }
    }
    
    return answer
}