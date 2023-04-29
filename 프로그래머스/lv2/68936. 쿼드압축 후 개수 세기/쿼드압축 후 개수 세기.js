const solution = (arr) => {
    let zero = 0;
    let one = 0;
	
  	// 쪼개는 함수 (시작행, 시작열, 비교할 길이)
    const divide = (row, col, n) => {
        let canDivide = true;
        // 처음부터 전부 숫자가 같은 지 비교
        for (let y=row; y < row+n; y++) {
            for (let x=col; x < col+n; x++) {
                if (arr[row][col] !== arr[y][x]) 
                    canDivide = false;
            }
        };
      	// 만약 같은 값으로 이루어 지지 않았으면, 4분할 하여 n/2씩 비교하는 재귀함수를 호출
        if (!canDivide) {
            const halfN = parseInt(n/2);
            divide(row, col, halfN)
            divide(row, col+halfN, halfN)
            divide(row+halfN, col, halfN)
            divide(row+halfN, col+halfN, halfN)
        // 만약 같은 값이면 행렬의 시작점을 비교하여 카운팅
        } else {
            if (arr[row][col]) one ++;
            else zero ++;
        }
    }
    divide(0, 0, arr.length);
    
    return [zero, one];    
}