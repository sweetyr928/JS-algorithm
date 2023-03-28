function solution(numbers) {
    let answer = [];
    numbers = numbers.split("");
    
    const isRight = (num) => {
        if(num <= 1) return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    const dfs = (arr,fixed) => {
        if(arr.length >= 1){
            for(let i=0;i<arr.length;i++){
                let newfixed = fixed + arr[i];
                let newArr = arr.slice();
                newArr.splice(i,1);
                if(!answer.includes(+newfixed) && isRight(+newfixed)) answer.push(+newfixed);
                dfs(newArr, newfixed);
            }
        }
    }
    
    dfs(numbers,"");
    
    return answer.length;
}