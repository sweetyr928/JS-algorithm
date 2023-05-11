function solution(sticker) {
  const len = sticker.length + 2; // i-2 요소 값을 구해야하기 때문
  const dp1 = new Array(len).fill(0); // 첫번째 스티커 뜯은 경우
  const dp2 = new Array(len).fill(0); // 첫번째 스티커 뜯지 않은 경우
  
  if(sticker.length === 1) return sticker[0]; // 스티커가 하나 일 때
  
  // 첫번째 스티커 뜯고 시작하는 경우
  for(let i = 2; i < len-1; i++)
    // 이전의 스티커를 뜯어 지금 스티커를 뜯을 수 없는 경우(지금까지의 합)
    // 이전의 스티커를 뜯지 않아 지금 스티커를 뜯을 수 있는 경우(지금까지의 합 + 현재 스티커 값)
    dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i-2]); 
  // 첫번째 스티커 뜯지 않고 시작하는 경우
  for(let i = 3; i < len; i++) 
    dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i-2]);
  
  return Math.max(dp1[len-2], dp2[len-1]); // 첫번째 뜯은 경우의 len-2에, 뜯지 않은 경우는 len-1에 최댓값 있음
}