function solution(k, dungeons) {
    // 방문한 던전을 제외한 나머지 배열, k를 파라미터로 갖는 dfs
    // 던전을 방문할 때마다 방문 깊이를 저장하고 그 저장한 방문 깊이 중 최댓값을 반환하면 됨
    let answer = [];
    dungeons.sort((a,b) => b[0]-a[0]);
    
    const dfs = (newK, newD) => {
        answer.push(dungeons.length - newD.length);
        if(newK > 0){
            for(let i=0;i<newD.length;i++){
                if(newK >= newD[i][0]){
                    let tempK = newK - newD[i][1];
                    let tempD = newD.slice();
                    tempD.splice(i,1);
                    dfs(tempK,tempD);
                } 
            }
        }
    }
    
    dfs(k, dungeons);
    
    return Math.max(...answer);
}