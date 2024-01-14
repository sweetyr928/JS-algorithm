function solution(order) {
    let answer = 0
    let main = order.reverse()
    let left = order.map((el,idx) => idx+1).reverse()
    let sub = []
    
    while(true){
        if(!sub.length && !left.length) break
        
        if(left.length && main[main.length-1] === left[left.length-1]){
            main.pop()
            left.pop()
            answer++;
        }else if(sub.length && main[main.length-1] === sub[sub.length-1]){
            main.pop()
            sub.pop()
            answer++
        }else{
            if(!left.length && main[main.length-1] !== sub[sub.length-1]) break
            else{
                sub.push(left.pop())
            }
        }
    }
    
    return answer
}