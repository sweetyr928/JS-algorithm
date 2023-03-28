function solution(k, dungeons) {
    let answer = [];
    let visited = new Array(dungeons.length).fill(0);
    
    const dfs = (count,newK) => {
        answer.push(count);
        
        for(let i=0;i<dungeons.length;i++){
            if(newK >= dungeons[i][0] && !visited[i]){
                visited[i] = 1;
                dfs(count+1, newK-dungeons[i][1]);
                visited[i] = 0;
            }
        }
    }
    
    dfs(0,k);
    
    return Math.max(...answer);
}