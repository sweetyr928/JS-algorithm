function solution(n, wires) {
    // wires 배열을 탐색하며 노드간 연결관계 객체로 저장
    // 루트 노드,제외할 특정 노드를 파라미터로 갖고 노드 별 간선 갯수 리턴하는 함수 작성
    // wires 배열 탐색하며 한 개의 연결 끊고 위에서 만든 함수에 각각 루트노드, 제외노드로 넣어 결과의 차가 가장 적은 경우 리턴
    let answer = 0;
    let tree = {};
    wires.map((el) => {
        if(!(el[0] in tree)) tree[el[0]] = [];
        if(!(el[1] in tree)) tree[el[1]] = [];
        tree[el[0]].push(el[1]);
        tree[el[1]].push(el[0]);
    });
    
    const edge = (root, except) => {
        let count = 0;
        let queue = [root];
        let visited = [];
        visited[root] = true;
        
        while(queue.length > 0){
            let cur = queue.pop();
            tree[cur].map((el) => {
                if(el!==except && !visited[el]) {
                    queue.push(el);
                    visited[el] = true;
                }
            })
            count++;
        }
        
        return count;
    }
    
    answer = 100;
    
    wires.map((el) => {
        let temp = Math.abs(edge(el[0],el[1]) - edge(el[1],el[0]));
        if(answer > temp) answer = temp;
    })
    
    return answer;
}