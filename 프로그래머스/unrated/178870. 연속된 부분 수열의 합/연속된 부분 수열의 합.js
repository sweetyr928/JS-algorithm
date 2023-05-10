function solution(sequence, k) {
    let answer = []; // 정답이 될 수 있는 후보를 담을 배열
    let sum = 0; 
    let head = 0; // 포인터
    let min = sequence.length;
    let result = []; // 답
    
    for(let i = 0; i<sequence.length;i++){
        sum += sequence[i];
        if(sum > k){
          // 작아질 때까지 앞에 값을 빼줌
            while(sum > k){
                sum -= sequence[head++];
            }
        }
        if(sum===k){ // k와 같다면 후보에 추가
            answer.push([head,i]);
        }
    }
    
    answer.forEach((el)=>{
        if(min > el[1] - el[0]){
            min = el[1] - el[0];
            result = [el[0],el[1]];
        }
    }) 
    
    return result;
}