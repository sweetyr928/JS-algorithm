function solution(n, computers) {
    let visited = new Array(n).fill(0);
    let answer = 0;

    function dfs(node) {
        visited[node] = 1;
        for(let i=0;i<computers[node].length;i++) {
            if(computers[node][i]===1 && !visited[i]){
                dfs(i);
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++;
        }
    }
    
    return answer;
}