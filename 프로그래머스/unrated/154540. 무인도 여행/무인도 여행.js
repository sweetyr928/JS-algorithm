function solution(maps) {
    const newM = maps.map((el) => el.split(""));
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    let answer = [];
    
    const dfs = (x,y,cnt) => {
        let total = +cnt;
        
        for(let i=0;i<4;i++){
            if(x+dx[i] >= 0 && x+dx[i] < maps.length && y+dy[i] >= 0 && y+dy[i] < maps[0].length){
                if(newM[x+dx[i]][y+dy[i]] !== "X"){
                    let start = newM[x+dx[i]][y+dy[i]];
                    newM[x+dx[i]][y+dy[i]] = "X";
                    total += dfs(x+dx[i],y+dy[i],start);
                }
             }
        }
        
        return total;
    }
    
    for(let i=0;i<newM.length;i++){
        for(let j=0;j<newM[0].length;j++){
            if(newM[i][j] !== "X"){
                let start = +newM[i][j];
                newM[i][j] = 'X';
                answer.push(dfs(i,j,start));
            }
        }
    }
    
    return answer.length ? answer.sort((a,b)=>a-b):[-1];
}