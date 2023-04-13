function solution(numbers) {
    // 소수 판별 함수 만들기
    // fixed 요소, fixed 요소 제외한 numbers 배열을 파라미터로 하는 dfs 함수 만들기
    // 이미 만든 소수라면 pass, 없다면 push -> 다음 단어 붙혀서 다시 dfs 함수로 검사
    let answer = [];
    
    const isRight = (num) => {
        if(num <= 1) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0) return false;
        }
    
        return true;
    }
    
    const dfs = (fixed, newNum) => {
        if(newNum.length > 0){
            for(let i=0;i<newNum.length;i++){
                let newNumbers = newNum.slice();
                newNumbers.splice(i,1);
                let newFixed = fixed+newNum[i];
                if(isRight(+newFixed) && !answer.includes(+newFixed)){
                    answer.push(+newFixed);  
                } 
                dfs(+newFixed, newNumbers);
            }
        }
        
    }
    
    dfs("", numbers.split(""));
    
    return answer.length;
}

