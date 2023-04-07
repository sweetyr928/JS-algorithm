function solution(n, t, m, p) {
    let answer = [];
    let str = "";
    let i = 0;
    
    while(answer.length < t*m){
        answer.push(...(i.toString(n).split("")));
        i++;
    }
    
    for(let i=p-1;i<answer.length;i+=m){
        if(str.length < t){
            if(answer[i] < 10 || answer[i] > 15) str += answer[i];
            else str += answer[i].toUpperCase();
        }
        else break;
    }
    
    return str;
}