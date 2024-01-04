function solution(elements) {
    let answer = new Set()
    
    for(let i=0;i<elements.length;i++){
        let els = elements.concat(elements.slice(0,i))
        
        for(let j=0;j<elements.length;j++){
            answer.add(els.slice(j,j+i+1).reduce((a,c) => a+=c),0)
        }
    }
    
    return answer.size
}