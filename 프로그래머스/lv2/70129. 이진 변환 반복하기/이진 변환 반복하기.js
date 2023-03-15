function solution(s) {
    let count = 0;
    let delZero = 0;
    let sum = 0;
    
    while(s.length!==1){
        sum = s.length;
        s = s.split("0").join('');
        delZero += sum - s.length;
        s = s.length.toString(2);
        count ++;
    }
    
    
    return [count, delZero];
}