function solution(priorities, location) {
    // [문서의 중요도,인덱스]를 요소로 갖는 배열 생성
    // 큐를 만들어 조건에 따라 인쇄. 만약 내가 찾는 문서라면 break
    let work = priorities.map((el,idx) => [el,idx]);
    let queue = [];
    
    while(work.length){
        let cur = work.shift();
        if(cur[0] >= Math.max(...work.map((el)=>el[0]))){
            queue.push(cur[1]);
            
            if(cur[1] === location) return queue.indexOf(cur[1])+1;
        }else{
            work.push(cur);
        }
    }
}