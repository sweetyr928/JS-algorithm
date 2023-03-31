function solution(n, computers) {
    let count = 0;
    let visited = new Array(n).fill(0);
    
    const dfs = (node) => {
        visited[node] = 1;
        for(let i=0;i<n;i++){
            if(!visited[i] && computers[node][i]){
                dfs(i);
            }
        }
    }
    
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i);
            count++;
        }
    }
    
    return count;
}

