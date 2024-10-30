function solution(n, costs) {
    let answer = 0;
    costs.sort((a, b)=>a[2]-b[2]); //비용이 작도록 정렬 
    const vis = new Array(n).fill(0); // 방문 여부
    const bridge = new Array(costs.length).fill(0); // 다리 연결 여부
    //다리 연결의 시작(비용 가장 적은 다리)
    
    vis[costs[0][0]] = true;
    vis[costs[0][1]] = true;
    answer += costs[0][2];
    bridge[0] = 1;
    let cnt = 1; // 다리 수 
    // 처음 연결한 섬과 연결가능한 섬들부터 하나하나 연결해나가는 방식
    // while문 안에 for문 두고, while문이 반복되면서 계속 for문에서 i는 0부터 시작하는 이유?
    // 비용 별 오름차순 정렬 후 0,1 섬 연결한 다음 순서가 3,4 섬이라면 넘어갔다가 0과 1과 관련된 섬 먼저 연결 후에 다시 따져줘야함
    // 만약 for문 하나로만 따져준다면 3,4 섬 순서는 넘어가고 다시 돌아오지 않아 따져줄 수가 없음
    
    while(cnt < n-1){ // 간선의 수 === 노드 갯수 -1 (모든 노드가 연결되는 시점)
        for(let i=0;i<costs.length;i+=1){
            const [start,end,cost] = costs[i];
            if(bridge[i]) continue; //이미 연결된 경우라면 넘어감
            // 둘 중 하나는 연결되었지만 하나는 연결안됨 -> 연결할 수 있음
            if(!vis[start] && vis[end] ||vis[start] && !vis[end]){
                cnt += 1; //다리 연결 + 1
                vis[start] = 1;
                vis[end] = 1;
                bridge[i] = 1;
                answer += cost;
                break; // while문 조건 확인하고 for문 돌며 다음 case 검사하려고 break  
            }
        }
    }
    return answer;
}

