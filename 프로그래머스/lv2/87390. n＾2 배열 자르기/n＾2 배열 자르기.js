function solution(n, left, right) {
    let arr = [];
    // 2차원 배열을 만들어서 하나하나 집어넣어주면 타임아웃이 뜬다.
    // 1차원 배열일 때의 idx와 2차원 배열일 때의 i,j 값의 규칙을 찾아
    // 원하는 부분의 값만 빼서 저장해야 한다.
    // 1. i행, j열의 값은 i,j 중 큰 값이 된다.
    // 2. idx와 i,j의 관계를 찾아야 한다. i는 Math.floor(idx/n)이고 j는 idx&n이다.
    // 3. 배열은 0부터 시작하므로 +1을 해준다.
    for(let i=left;i<=right;i++){
        arr.push(Math.max(Math.floor(i/n)+1,(i%n)+1));
    }
    
    return arr;
}