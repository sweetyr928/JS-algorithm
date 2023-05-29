function solution(want, number, discount) {
    let answer = 0;

    const isRight = (arr) => {
        let map = new Map();
        for(let i=0;i<arr.length;i++) map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        for(let i=0;i<want.length;i++){
            if(map.get(want[i]) !== number[i]) return false;
        }
        return true;
    }
    
    for(let i=0;i<=discount.length-10;i++){
        let temp = discount.slice(i,i+10);
        if(isRight(temp)) answer++;
    }
    
    return answer;
}