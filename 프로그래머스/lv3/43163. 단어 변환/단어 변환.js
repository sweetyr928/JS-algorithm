function solution(begin, target, words) {
    let visited = [];
    let queue = [];
    
    if(!words.includes(target)) return 0;
    
    queue.push([begin,0]);
    
    while(queue.length){
        let [word, cnt] = queue.shift();
        if(word === target) return cnt;
        
        words.map((el) => {
                let diff = 0;
                
                for(let i=0;i<el.length;i++){
                    if(el[i] != word[i]) diff++;
                }
                
                if(diff === 1){
                    queue.push([el,cnt+1]);
                    visited.push(el);
                } 
            })
    }
 
}