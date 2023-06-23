function solution(queue1, queue2) {
    let newQ = [...queue1,...queue2];
    let p1 = 0;
    let p2 = queue1.length;
    let half = (queue1.reduce((a,c) => a+=c,0) + queue2.reduce((a,c) => a+=c,0)) / 2;
    let sum1 = queue1.reduce((a,c) => a+=c,0);
    
    for(let i=0;i<queue1.length * 3;i++){
        if(sum1 === half) return i;
        else{
            sum1 = sum1 > half ? 
                sum1 -= newQ[p1++ % newQ.length] : sum1 += newQ[p2++ % newQ.length];
        }
    }
    
    return -1;
}