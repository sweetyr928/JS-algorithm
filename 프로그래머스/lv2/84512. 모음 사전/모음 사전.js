function solution(word) {
    let result = [];
    
    const dfs = (str,length) => {
        const alpha = ['A','E','I','O','U'];
        if(length === str.length){
            result.push(str); return;
        }
        
        alpha.map((el) => dfs(str+el,length));
    }
    
    for(let i=1;i<=5;i++) dfs("",i);
    
    return result.sort().indexOf(word) + 1;
}