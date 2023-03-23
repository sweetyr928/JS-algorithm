function solution(routes) {
    let answer = 0;
    routes.sort((a,b) => a[1] - b[1]);
    let bb = routes[0][1];
  
    for(let i=0;i<routes.length;i++){
      if(routes[i][0] <= bb && routes[i][1] >= bb) continue;
      else answer++; bb = routes[i][1];
    }
    answer++;
  
    return answer;
}