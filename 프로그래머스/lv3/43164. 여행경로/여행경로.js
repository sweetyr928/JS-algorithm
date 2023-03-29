function solution(tickets) {
    let answer = [];
    
    const dfs = (target, tickets, path) => {    
        let newPath = [...path, target];
        if(tickets.length === 0){
            answer.push(newPath);
        }
        else{
            tickets.map((el,idx) => {
                if(el[0] === target){
                    let newTickets = tickets.slice();
                    newTickets.splice(idx,1); 
                    dfs(el[1], newTickets, newPath);
                }
            })
        }
    }
    
    dfs("ICN", tickets, []);
    
    return answer.sort()[0];
}