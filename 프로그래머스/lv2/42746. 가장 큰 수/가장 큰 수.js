function solution(numbers) {
    // 모든 요소들을 string으로 바꿔준다.
    // 문자열을 그대로 연결한 수(a+b) - 바꿔 연결한 수(b+a)가 양수이면 순서를 그대로 유지한다.
    let temp = numbers.map((a) => String(a)).sort((a, b) => (b + a) - (a + b));

    // 모든 숫자가 0인 경우 000...처럼 나오지 않게 0을 출력한다.
    return temp[0] === '0' ? '0' : temp.join('');
}