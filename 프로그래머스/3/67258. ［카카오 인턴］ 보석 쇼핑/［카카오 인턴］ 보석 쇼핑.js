function solution(gems) {
    let answer = [1, gems.length]
    const map = new Map()
    map.set(gems[0],1)
    
    let l=0, r=0
    const all = new Set(gems).size
    
    while(r < gems.length){
        if(map.size === all){
            if(answer[1] - answer[0] > r-l)
                answer = [l+1, r+1]
            map.set(gems[l], map.get(gems[l])-1)
            if(!map.get(gems[l])) map.delete(gems[l])
            l++
        }else{
            r++
            map.set(gems[r],(map.get(gems[r]) || 0)+1)
        }
    }
    
    return answer
}