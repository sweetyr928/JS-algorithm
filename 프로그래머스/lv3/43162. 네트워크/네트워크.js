function solution(n, computers) {
    let visited = new Array(n).fill(0);
    let answer = 0;

    function dfs(i) {
        visited[i] = 1;
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                dfs(j);
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