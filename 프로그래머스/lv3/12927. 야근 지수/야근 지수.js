function solution(n, works) {
    if(works.reduce((a,c)=>a+=c) <= n) return 0;
    let answer = 0;
    // 모든 요소의 편차를 줄여주기 위해 정렬
    let sorted = works.sort((a,b) => a-b);
  
    while(n) {
    	// 가장 큰 값 먼저 줄여줌. 그래야 최종 값이 최대한 줄어들기 때문.
        const max = sorted[works.length-1];
        for(let i = works.length-1; i >= 0; i--) {
            if(sorted[i] >= max) {
                sorted[i]--;
                n--;
            }
            if(!n) break;
        }
    }

    return works.reduce((a,c) => a + Math.pow(c, 2), 0);
}