function solution(n, k) {
    let answer = [];
    let arr = new Array(n).fill(1);
    for (let i=1;i<n;i++) arr[i] = arr[i-1]+1;
    let nth = k-1;
    
    while(arr.length){
        if(nth === 0){
            answer.push(...arr);
            break;
        }
        let turn = fact(arr.length-1); // 고정값 바뀌는 주기
        let idx = nth/turn >> 0; // 고정값
        nth = nth%turn; // 고정값 경우의 수 범위 내 순서
        answer.push(arr[idx]); // 정답 배열에 고정값 넣기
        arr.splice(idx,1); // 후보 배열에서 고정값 제거
    }
    
    return answer;
}

function fact(n) {
    if(n<=1) return n;
    
    return n * fact(n-1);
}