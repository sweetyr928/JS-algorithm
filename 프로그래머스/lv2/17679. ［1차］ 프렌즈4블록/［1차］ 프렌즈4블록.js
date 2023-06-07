function solution(m, n, board) {
    let answer = 0;
    const newB = [];
    
    for(let i=0;i<board.length;i++){
        let temp = [];
        for(let j=0;j<board[i].length;j++){
            temp.push([board[i][j],0]);
        }
        newB.push(temp);
    }
    
    while(true){
        let cur = 0;
        // 같은 블록 찾기
        for(let i=0;i<m-1;i++){
            for(let j=0;j<n-1;j++){
                if(newB[i][j].length && newB[i+1][j].length && newB[i][j][0] === newB[i][j+1][0] 
                   && newB[i][j][0] === newB[i+1][j][0] && newB[i+1][j][0] === newB[i+1][j+1][0]){
                    if(!newB[i][j][1]){
                      newB[i][j][1] = 1;
                      cur++;
                    }
                  if(!newB[i][j+1][1]){
                      newB[i][j+1][1] = 1;
                      cur++;
                    }
                  if(!newB[i+1][j][1]){
                      newB[i+1][j][1] = 1;
                      cur++;
                    }
                  if(!newB[i+1][j+1][1]){
                      newB[i+1][j+1][1] = 1;
                      cur++;
                    }
                }
            }
        }
        // 윗 블록 내리기
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(newB[i][j][1] && i === 0){
                    newB[i][j] = [];
                }else if(newB[i][j][1] && i > 0){
                    newB[i][j] = [...newB[i-1][j]];
                    newB[i-1][j] = [];
                }
            }
        }
        // 빈 곳 채우기
        for(let i=m-1;i>0;i--){
            for(let j=0;j<n;j++){
                if(!newB[i][j].length){
                    for(let k=i-1;k>=0;k--){
                        if(newB[k][j].length){
                            newB[i][j] = [...newB[k][j]];
                            newB[k][j] = [];
                            break;
                        }
                    }
                }
            }
        }
        answer += cur;
        
        if(!cur) break;
    }
    
    return answer;
}