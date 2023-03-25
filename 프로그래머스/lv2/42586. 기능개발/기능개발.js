function solution(progresses, speeds) {
    // 큐의 개념 이용 => 선입선출(먼저 배포 되어야하는 작업이 먼저 실행됨)
    let answer = [];
    // 각 작업 별 소요되는 작업기간 구하기
    let days = progresses.map((el,idx) => Math.ceil((100 - el) / speeds[idx]));
    // 각 배포마다 몇 개의 기능이 배포되는지 확인
    // 뒤에 있는 기능이 완료됐더도 앞에 있는 기능이 배포될 때까지 기다렸다가 함께 배포되어야 함
    let max = days[0];
    let count = 1;
    for(let i=1;i<days.length;i++){
      if(max < days[i]){
        answer.push(count);
        max = days[i];
        count = 1;
      }else count++;
    }
    // 마지막 배포 날짜의 배포되는 기능 수까지 push
    answer.push(count);
    
    return answer;
}