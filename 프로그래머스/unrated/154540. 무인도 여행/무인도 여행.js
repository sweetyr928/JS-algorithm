function solution(maps) {
  const newMap = maps.map((n) => n.split("")); // 배열 안 문자열을 배열로 변환해준다.
  // 상 하 좌 우 좌표를 미리 세팅
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const answer = [];

  function dfs(x, y, cnt) {
    let sum = + cnt; // 요소가 문자이므로 숫자로 변환

    // 설정해둔 좌표 배열을 통해 상 하 좌 우를 탐색
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 현재 탐색 중인 좌표가 지도를 벗어나지 않는지 판단
      if (nx >= 0 && ny >= 0 && nx < newMap.length && ny < newMap[0].length) {
        // 지도를 벗어나지 않고 "X"가 아닌 곳을 찾는다면
        if (newMap[nx][ny] !== "X") {
          // 식량 수 저장
          const next = newMap[nx][ny];
          // "X"로 변환
          newMap[nx][ny] = "X";
          // dfs를 통해 리턴 값을 하나하나 sum에 더함
          sum += dfs(nx, ny, next);
        }
      }
    }

    return sum; // 최종 sum return(서로 연결된 하나의 무인도의 식량 합)
  }

  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      // "X"가 아닌 곳을 찾게된다면
      if (newMap[i][j] !== "X") {
        // 현재 식량 수 저장
        const start = newMap[i][j];
        // 현재 탐색 중인 요소를 X로 변환(한번 방문한 곳은 다시 방문하지 않기 위해)
        newMap[i][j] = "X";
        // dfs(x좌표, y좌표, 식량 수)를 실행하고 반환 값을 answer에 push
        answer.push(dfs(i, j, start));
      }
    }
  }

  // 만약 answer의 길이가 0이라면 [-1]을 리턴한다.
  // 아니라면 오름차순으로 정렬 후 리턴해준다.
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}