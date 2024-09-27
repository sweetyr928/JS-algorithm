function solution(arr) {
    let answer = [0,0];
    
    const check = (row, col,n) => {
        let allSame = true;
        for(let i=row;i<row+n;i++){
            for(let j=col;j<col+n;j++){
                if(arr[i][j] !== arr[row][col]) {
                    allSame = false;
                    break;
                }
            }
        }
        
        if(!allSame){
            let newN = parseInt(n/2);
            check(row,col,newN);
            check(row,col+newN,newN);
            check(row+newN,col,newN);
            check(row+newN,col+newN,newN);
        }else{
            if(arr[row][col]) answer[1]++;
            else answer[0]++;
        }
    }
    
    check(0,0,arr.length);
    
    return answer;
}