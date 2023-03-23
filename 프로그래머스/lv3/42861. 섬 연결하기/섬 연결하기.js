function solution(n, costs) {
    let answer = 0;
    costs.sort((a,b)=>a[2]-b[2]); //비용이 작도록 정렬 
    const vis = new Array(n).fill(0); // 방문 여부
    const bridge = new Array(costs.length).fill(0); // 다리 연결 여부
    //다리 연결의 시작(비용 가장 적은 다리)
    vis[costs[0][0]] = true;
    vis[costs[0][1]] = true;
    answer += costs[0][2];
    bridge[0] = 1;
    let cnt = 1; //연결 된 갯수 
    while(cnt < n-1){// 노드 갯수 -1 === 간선의 수 (모든 노드가 연결되는 시점)
        for(let i=0;i<costs.length;i+=1){
            const [start,end,cost] = costs[i];
            if(bridge[i]) continue; //이미 연결된 경우라면 넘어감
            // 둘 중 하나는 연결되었지만 하나는 연결안됨 -> 연결할 수 있음
            if(!vis[start] && vis[end] ||vis[start] && !vis[end]){
                cnt += 1; //다리 연결+1
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