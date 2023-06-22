function solution(sequence, k) {
    let candidate = [];
    let sum = 0;
    let head = 0;
    let answer = [];
    let min = sequence.length;
    
    for(let i=0;i<sequence.length;i++){
        sum += sequence[i];
        if(sum > k)
            {
                while(sum > k){
                    sum -= sequence[head++];
                }
            }
        if(sum === k)
            candidate.push([head,i]);      
    }
    
    candidate.map((el) => {
        if(min > el[1] - el[0]){
            min = el[1] - el[0];
            answer = [...el];
        }
    })
    
    return answer;
}