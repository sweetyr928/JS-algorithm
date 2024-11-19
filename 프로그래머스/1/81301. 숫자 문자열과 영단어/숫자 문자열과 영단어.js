function solution(s) {
    var answer = "";
    let alpha = {
        'zero' : '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9'
    }
    let tempStr = '';
    
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            answer = answer + s[i];
        }
        else{
            tempStr += s[i];
            if(tempStr in alpha){
                answer = answer + alpha[tempStr];
                tempStr = '';
            }
        }
    }
    return Number(answer);
}