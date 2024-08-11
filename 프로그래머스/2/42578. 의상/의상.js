function solution(clothes) {
    let map = new Map()
    
    for(let i = 0;i < clothes.length;i++){
        map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1)
    }
     let answer = 1
     
     for(let value of map.values()){
        answer *= (1 + value)
    }
    
    return answer - 1
}