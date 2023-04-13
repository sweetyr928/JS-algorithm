function solution(word) {
    // fixed 단어, 만든 단어 길이를 파라미터로 갖는 dfs 함수를 통해 사전을 만듦
    // 사전을 알파벳 순으로 정렬 후 word의 순서 리턴
    let dic = [];
    let alpha = ['A', 'E', 'I', 'O', 'U'];
    
    const dfs = (fixed, len) => {
        if(fixed.length === len){
            dic.push(fixed);
            return;
        }
        for(let i=0;i<alpha.length;i++){
            let newFixed = fixed + alpha[i];
            dfs(newFixed,len);
        }
    }
        
    for(let i=1;i<=5;i++) dfs("",i);
            
    return dic.sort().indexOf(word) + 1;
}