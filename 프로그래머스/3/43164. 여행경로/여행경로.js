function solution(tickets) {
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