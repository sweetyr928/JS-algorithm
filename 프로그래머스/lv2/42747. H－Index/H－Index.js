function solution(citations) {
    let answer = 0; 
    citations.sort((a,b) => b-a);
    
    while(true){
        if(citations.filter(el => el >= answer).length < answer) break;
        answer++;
    }
    
    return answer-1;
}