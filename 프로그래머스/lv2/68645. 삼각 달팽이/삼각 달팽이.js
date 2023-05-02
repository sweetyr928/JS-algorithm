function solution(n) {
  let answer = [];
  let count = 0;
  let arr = Array.from({ length: n }, (el, idx) => Array(idx + 1).fill(0));
  let currentX = -1; // 상하
  let currentY = 0; // 좌우
  while (n > 0) { // n의 값이 유효할 때까지 반복(안에 있는 세모들도 결국 같은 모양새이므로)
    for (let i = 0; i < n; i++) {
      // 위에서 아래로 내려가는 대각선
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로 가는 선
      currentY++; // 이미 위의 for문을 통해 currentX 값이 삼각형 가장 밑 변이므로
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로 내려가는 대각선
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3; // 매 while 문 총 세 번의 칸 채움이 있음(위아래, 왼오, 아래위)
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]]; // 2중 배열 풀어줌
  }

  return answer;
}