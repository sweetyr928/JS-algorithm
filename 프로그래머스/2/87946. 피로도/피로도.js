function solution(k, dungeons) {
    let ans = []
    dungeons.sort((a,b) => b[0]-a[0])
    
    const dfs = (newK, newD) => {
        ans.push(dungeons.length - newD.length)
        if(newK > 0){
            for(let i=0;i<newD.length;i++){
                if(newK >= newD[i][0]){
                    let tempK = newK - newD[i][1]
                    let tempD = newD.slice()
                    tempD.splice(i,1)
                    dfs(tempK,tempD)
                } 
            }
        }
    }
    
    dfs(k, dungeons)
    
    return Math.max(...ans)
}