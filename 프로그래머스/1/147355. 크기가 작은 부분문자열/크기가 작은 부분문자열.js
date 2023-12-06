function solution(t, p) {
    let answer = 0
    let pLength = p.length
    
    for(let i=0;i<=t.length-pLength;i++){
        let str = ''
        for(let j=0;j<pLength;j++)
            str += t[i+j]
        if(str <= p) answer++
    }
    
    return answer;
}