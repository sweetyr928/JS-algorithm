function solution(topping) {
    let answer = 0
    let total = new Map()
    let brother = new Set()
    
    for(let i=0;i<topping.length;i++){
        total.set(topping[i], (total.get(topping[i]) || 0) + 1)
    }
    
    for(let t of topping){
        total.set(t, total.get(t) - 1)
        brother.add(t)
        
        if (!total.get(t)) total.delete(t)
        
        if(total.size === brother.size) answer ++
        if(total.size < brother.size) break
    }
    
    return answer
}