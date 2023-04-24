function solution(numbers) {
    let answer = [];
    
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 === 0) answer.push(numbers[i]+1);
        else{
            let temp = numbers[i].toString(2).split("");
            let zero = false;
            for(let j=temp.length-1;j>=0;j--){
                if(temp[j] === '0'){
                    temp[j] = 1;
                    temp[j+1] = 0;      
                    zero = true;
                    answer.push(Number(BigInt(parseInt(temp.join(""),2))));
                    break;
                }
            }
            if(!zero){
                temp[0] = '0';
                let temp2 = ['1',...temp].join("");
                answer.push(Number(BigInt(parseInt(temp2,2))));
            }
        }
    }
    
    return answer;
}