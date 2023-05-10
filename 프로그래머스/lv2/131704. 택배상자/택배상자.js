function solution(order) {
    let answer = 0;
    let main = order.reverse(); // pop이 shift 보다 시간 덜 소요 되므로 순서 역순
    let left = order.map((el,idx) => idx+1).reverse(); // 택배 숫자 역순
    let sub = []; // 보조 컨테이너(stack)
    
    while(true){   
        // 택배를 모조리 보조 컨테이너 옮긴 후 보조 컨테이너에 택배가 없을 때 break
        if(!left.length && !sub.length) break; 
        
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
            // 보조 컨테이너에 옮기거나 트럭에 넣을 남은 택배도 없고, 
            // 다음 순서 택배가 보조 컨테이너에서 꺼낼 수 있는 택배와 다른 경우
            // 더 이상 진행할 수 없으므로 break
            if(!left.length && main[main.length-1] !== sub[sub.length-1]) break;
            else{
                sub.push(left[left.length-1]); //메인 컨테이너에 택배 있다면 보조컨테이너에 옮기기
                left.pop();
            }

        }
    }
    
    return answer;
}