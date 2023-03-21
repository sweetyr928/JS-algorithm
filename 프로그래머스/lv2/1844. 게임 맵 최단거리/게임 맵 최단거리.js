function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let answer = -1;
    let visited = Array.from(Array(n), () => Array(m).fill(false));

    // BFS 를 하기 위한 queue, 초기 값 저장 => [x좌표,y좌표,움직인 횟수]
    let queue = [[0, 0, 1]];
    // queue 의 위치를 저장할 queueIndex
    let queueIndex = 0;
    // x, y 가 움직일 배열을 저장함 (상, 우, 하, 좌)
    const moveX = [1, 0, -1, 0];
    const moveY = [0, 1, 0, -1];

    // BFS
    while (queue.length > queueIndex) {
        // 일단 queue 에 있는 값을 꺼냄
        const now = queue[queueIndex];
        // 값을 꺼냈으므로 index 를 +1 해줌
        queueIndex += 1;

        // 만약 꺼낸 값이 정답 (도착지) 이면
        if (now[0] == n - 1 && now[1] == m - 1) {
            // answer 에 답을 저장함 (now[2] 는 이동 거리)
            answer = now[2];
            break;
        }

        // 만약 꺼낸 값이 방문하지 않은 값이라면
        if (!visited[now[0]][now[1]]) {
            // 방문
            visit(now[0], now[1], now[2])
        }
    }

    function visit(x, y, count) {
        visited[x][y] = true;

        // 현재 x, y 위치에서 상, 하, 좌, 우 로 이동할 반복문
        for (let i = 0; i < moveX.length; i++) {
            // movedX, Y 로 설정함.
            const movedX = x + moveX[i];
            const movedY = y + moveY[i];

            // 만약, movedX, movedY 가 배열의 범위 안에 있고, 그 값 위치가 아직 방문하지 않았고, 그 위치를 방문할 수 있다면 (값이 1이라면)
            if (movedX >= 0 && movedX < n && movedY >= 0 && movedY < m && !visited[movedX][movedY] 
                && maps[movedX][movedY] == 1) {
                // queue 에 그 값을 넣음
                queue.push([x + moveX[i], y + moveY[i], count + 1]);
            }
        }
    }

    return answer;
}