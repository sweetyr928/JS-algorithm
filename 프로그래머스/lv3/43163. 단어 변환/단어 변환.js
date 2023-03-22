function solution(begin, target, words) {
    let answer = 0;
    let visited = [];
    let queue = [];

    // 예외처리
    if(!words.includes(target)) return 0;
    // [시작단어, 변경횟수]
    queue.push([begin,answer]); 

    while(queue) {
        let [v, cnt] = queue.shift();

        if (v === target) { 
            return cnt;
        }

        words.forEach(word => {
            // 다른 단어의 갯수
            let notEqual = 0; 
            // 방문했던 단어면 pass
            if(visited.includes(word)) return; 

            for (let i=0; i<word.length; i++) {
                if (word[i] !== v[i]) notEqual++;
            }
            //만약 다른게 1개라면 queue에 [단어, 횟수] 형태로 추가
            if (notEqual === 1) { 
                queue.push([word, ++cnt]); 
              	//  hit -> hot이 되었을 때 [hot,1] 형태로 queue에 추가됨;
                visited.push(word); //방문처리를 해준다.
            }
        });
    }
    
    return answer;
}