function solution(n, words) {
    let done = [words[0]]
    
    for(let i = 1;i < words.length;i++){
        if(words[i][0] !== words[i-1][words[i-1].length-1] ||
          done.includes(words[i]))
            return [(i + 1) % n > 0 ? (i + 1) % n : n, Math.ceil((i + 1) / n)]
        else done.push(words[i])
    }
    
    return [0,0]
}