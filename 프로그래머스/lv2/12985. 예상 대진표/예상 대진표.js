function solution(n,a,b) {
    let cnt = 0;
    //  a와 b가 같아지면 같은 라운드에 있다는 말과 같다.
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
    }

    return cnt;
}