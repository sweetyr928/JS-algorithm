function solution(begin, target, words) {
    // 최소 단계니까 bfs
    // 단어 visited 배열 필수
    // 현재 단어와 한 개의 알파벳만 다른 경우 queue에 push
    // queue [단어, cnt]
    let answer = 0;
    let visited = new Array(words.length).fill(0);
    let queue = [[begin,0]];
    
    while(queue.length){
        let cur = queue.shift();
        if(cur[0] === target){
            answer = cur[1];
            break;
        }else{
            for(let i=0;i<words.length;i++){
                let diff = 0;
                for(let j=0;j<words[i].length;j++){
                    if(words[i][j] !== cur[0][j]) diff++;
                }
                if(diff === 1 && !visited[i]) {
                    queue.push([words[i],cur[1]+1]);
                    visited[i] = 1;
                }
            }
        }
    }
    
    return answer;
}