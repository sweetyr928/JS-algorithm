function solution(n, lost, reserve) {
    let count = n - lost.length;
    lost = lost.sort((a,b) => a-b);
    
    for(let i =0;i <lost.length;i++){
        if(!reserve.length) break;
        
        if(reserve.includes(lost[i])) { 
            reserve.splice(reserve.indexOf(lost[i]),1); count++; 
        }else if(reserve.includes(lost[i] - 1) && !lost.includes(lost[i] - 1)) {
            reserve.splice(reserve.indexOf(lost[i] - 1),1); count++;
        }else if(reserve.includes(lost[i] + 1) && !lost.includes(lost[i] + 1)) {
            reserve.splice(reserve.indexOf(lost[i] + 1),1); count++;
        }
    }
    
    return count;
}