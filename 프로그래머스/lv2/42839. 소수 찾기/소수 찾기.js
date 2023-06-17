function solution(numbers) {
    let answer = [];
    numbers = numbers.split("");
    
    const isRight = (n) => {
        if(n<=1) return false;
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i === 0) return false;
        }
        return true;
    }
    
    const dfs = (left,fixed) => {
        if(left.length > 0){
            for(let i=0;i<left.length;i++){
                let temp = fixed + left[i];
                let newLeft = left.slice();
                newLeft.splice(i,1);
                if(isRight(+temp) && !answer.includes(+temp))
                    answer.push(+temp);
                dfs(newLeft,temp);
            }
        }
    }
    
    dfs(numbers,"");
    
    return answer.length;
}