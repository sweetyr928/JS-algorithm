function solution(n) {
    let answer = '';
    let arr = ['4','1','2'];
    
    while(n>0){
        answer = arr[n%3] + answer;
        
        n = Math.ceil(n/3-1);
    }
    
    return answer;
}