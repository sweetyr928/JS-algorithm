function solution(n, words) {
    for(let i=1;i<words.length;i++){
        if(words[i][0] !== words[i-1][words[i-1].length-1] || 
          words.slice(0,i).includes(words[i])) {
          console.log((i+1)%n)
            return [(i+1)%n > 0 ? (i+1)%n : n , Math.ceil(words.slice(0,i+1).length/n)]
        }
    }
    return [0,0];
}