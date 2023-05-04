function solution(order) {
    let answer = 0;
    let main = order.reverse();
    let left = order.map((el,idx) => idx+1).reverse(); // 택배 숫자 순
    let sub = [];
    
    while(true){   
        if(!left.length && !sub.length) break;
        // console.log(order,left,sub,answer)
        
        if(left.length && main[main.length-1] === left[left.length-1]){
            answer++;
            left.pop();
            order.pop();
        }
        else if(sub[sub.length-1] === main[main.length-1]){
            sub.pop();
            answer++;
            order.pop();
        }else{
            if(!left.length && main[main.length-1] !== sub[sub.length-1]) break;
            else{
                sub.push(left[left.length-1]);
                left.pop();
            }

        }
    }
    
    return answer;
}