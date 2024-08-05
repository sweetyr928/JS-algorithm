function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer= '';

    for(let i = 0;i < s.length;i++){
        if(s[i] === ' ') {
            answer += ' '; 
        }else{
            let arr = upper.includes(s[i]) ? upper : lower;
            let idx = arr.indexOf(s[i]) + n;
            if(idx >= arr.length) idx -= arr.length;
            answer += arr[idx];   
        }
    }
    
    return answer;
}