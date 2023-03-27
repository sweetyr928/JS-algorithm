function solution(answers) {
    let answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let cor = [0,0,0];

    for(let i=0;i<answers.length;i++){
        if(answers[i] === one[i%one.length]) cor[0]++;
        if(answers[i] === two[i%two.length]) cor[1]++;
        if(answers[i] === three[i%three.length]) cor[2]++;
    }
    
    let max = Math.max(...cor);
  
    for(let i=0;i<3;i++){
      if(cor[i] === max) answer.push(i+1);
    }
    
    return answer;
}