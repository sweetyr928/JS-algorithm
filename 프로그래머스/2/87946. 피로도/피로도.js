function solution(k, dungeons) {
    let answer = []
    dungeons.sort((a,b) => b[0]-a[0])
    
    const dfs = (newK, newDundeons) => {
        answer.push(dungeons.length - newDundeons.length)
        if(newK > 0){
            for(let i=0;i<newDundeons.length;i++){
                if(newK >= newDundeons[i][0]){
                    let tempK = newK - newDundeons[i][1]
                    let tempD = newDundeons.slice()
                    tempD.splice(i,1)
                    dfs(tempK,tempD)
                } 
            }
        }
    }
    
    dfs(k, dungeons)
    
    return Math.max(...answer)
}