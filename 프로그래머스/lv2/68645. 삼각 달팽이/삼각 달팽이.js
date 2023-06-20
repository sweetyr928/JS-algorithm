function solution(n) {
    let answer = [];
    let arr = Array.from({length : n}, (_,idx) => new Array(idx+1).fill(0));
    let x = 0; // 좌우
    let y = -1; // 상하
    let cur = 0;
    
    while(n > 0){
        for(let i=0;i<n;i++){ // 위에서 아래
            y++;
            cur++;
            arr[y][x] = cur;
        }
        for(let i=0;i<n-1;i++){ // 왼에서 오
            x++;
            cur++;
            arr[y][x] = cur;
        }
        for(let i=0;i<n-2;i++){ // 아래에서 위
            x--;
            y--;
            cur++;
            arr[y][x] = cur;
        }
        n -= 3;
    }
    
    for(let i=0;i<arr.length;i++){
        answer = [...answer,...arr[i]]
    }
    
    return answer;
}