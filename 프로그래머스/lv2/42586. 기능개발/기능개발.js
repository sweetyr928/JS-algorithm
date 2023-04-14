function solution(progresses, speeds) {
    // 모든 작업의 소요 시간 구하기
    // 큐를 사용해 작업기간 max 값(임시로 첫번째 값으로 둠)보다 큰 값이 나오면 그 전 작업 배포
    let answer = [];
    let time = progresses.map((el,idx) => Math.ceil((100-el)/speeds[idx]));
    let max = time[0];
    let cnt = 0;
    
    time.map((el) => {
        if(max >= el){
            cnt++;
        }else{
            answer.push(cnt);
            cnt = 1;
            max = el;
        }
    })
    
    answer.push(cnt);
    
    return answer;
}