function solution(dirs) {
    let answer = new Set();
    let now = [0,0];
    let move = {"U" : [0,1], "D" : [0,-1], "L" : [-1,0], "R" : [1,0]};
    
    for(let i=0;i<dirs.length;i++){
        let nowX = now[0] + move[dirs[i]][0];
        let nowY = now[1] + move[dirs[i]][1];
        if(nowX <= 5 && nowX >= -5 && nowY <= 5 && nowY >= -5){
            answer.add(`${now[0]}${now[1]}${nowX}${nowY}`);
            answer.add(`${nowX}${nowY}${now[0]}${now[1]}`);
            now = [nowX, nowY];
        }
    }
    
    return answer.size / 2;
}