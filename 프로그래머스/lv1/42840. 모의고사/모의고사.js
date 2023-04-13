function solution(answers) {
    // 1,2,3 수포자에 따라 답 배열 만들기
    // 각 수포자가 몇 개 맞았는지 확인
    // 가장 많은 문제를 맞힌 값을 max로 두고, max 값만큼 맞힌 사람만 배열에 push
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = new Array(3).fill(0);
    let answer = [];
    
    for(let i=0;i<answers.length;i++){
        if(answers[i] === one[i % one.length]) count[0]++;
        if(answers[i] === two[i % two.length]) count[1]++;
        if(answers[i] === three[i % three.length]) count[2]++;
    }
    let max = Math.max(...count);
    
    for(let i=0;i<count.length;i++){
        if(count[i] === max) answer.push(i+1);
    }
    
    return answer;
}