function solution(n, k) {
    let answer = 0;
    let newN = n.toString(k);
    newN = newN.split("0").filter(el => el !== " " && el > 1);
    let prime = true;
    
    for(let i=0;i<newN.length;i++){
        prime = true;
        for(let j=2;j<=Math.sqrt(newN[i]);j++){
            if(newN[i] % j === 0) {
                prime = false;
                break;
            }
        }
        if(prime) answer++;
    }
    
    return answer;
}