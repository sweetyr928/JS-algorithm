function solution(tickets) {
    // 최소 경로니까 bfs. 파라미터 : 현재 있는 공항, 경로, 남은 티켓
    // 모든 항공권을 사용하는 경우를 모아 알파벳 순으로 정렬
    let answer = [];
    let visited = new Array(tickets.length).fill(0);
    
    const bfs = (airport, visit) => {
        if(visit.length === tickets.length + 1){
            answer.push(visit);
            return;
        }else{
            for(let i=0;i<tickets.length;i++){
                if(tickets[i][0] === airport && !visited[i]){
                    visited[i] = 1;
                    let newV = visit.slice();
                    newV.push(tickets[i][1]);
                    bfs(tickets[i][1], newV);
                    visited[i] = 0;
                }
            }
        }
    }
    
    bfs("ICN", ["ICN"]);
    
    return answer.sort()[0];
}