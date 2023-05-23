function solution(n) {
    let answer = 0;
    // 처음부터 가면 따져줄 조건이 많으니 역으로 출발지점으로 온다고 생각하기
    while(n > 0) {
        // n이 2로 나누어 떨어지면 순간이동
        if(n % 2 === 0) {
            n /= 2;
        } else {
            // 아니라면 점프
            n--;
            answer++;
        }
    }
    
    return answer;
}