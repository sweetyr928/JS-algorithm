function solution(word) {
    let dic = []
    let alpha = ['A', 'E', 'I', 'O', 'U']
    
    const dfs = (fixed, len) => {
        if(fixed.length === len){
            dic.push(fixed)
            return
        }
        for(let i = 0;i < alpha.length;i++){
            let newFixed = fixed + alpha[i]
            dfs(newFixed,len)
        }
    }
        
    for(let i = 1;i <= 5;i++) dfs("",i)
            
    return dic.sort().indexOf(word) + 1
}