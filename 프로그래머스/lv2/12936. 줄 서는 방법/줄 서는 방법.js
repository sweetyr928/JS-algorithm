function solution (n, k) {
  const answer = [];
  const arr = new Array(n).fill(1); // n까지의 값이 든 배열
  for(let i = 1; i < n; i++) arr[i] = arr[i-1] + 1;
  let nth = k-1; // 순번. 배열의 인덱스는 0부터 시작하므로 -1
  
  while(arr.length) {
    if(nth === 0) { // 해당 순서의 가장 앞
      answer.push(...arr);
      break;
    }
    const fact = factorial(arr.length - 1); // n-1 주기로 맨 앞 요소(고정 값)가 바뀜
    const idx = nth / fact >> 0; // 고정 값이 될 인덱스 번호 : 순번 / 고정 값을 제외한 요소 개수 팩토리얼 값
    // 고정 값을 제외한 나머지 요소도 위와 같이 처리해줘야하므로 다음 순번 계산해주기
    // 다음 순번은 현재 순서에서 얼만큼 떨어져있는가이므로 (순번 % (고정 값을 제외한 요소 개수 팩토리얼 값))이 됨
    nth = nth % fact; 
    answer.push(arr[idx]); // 계산한 인덱스 번호에 해당하는 값 push
    arr.splice(idx, 1); // 고정 요소 배열에서 삭제
  }
  
  return answer;
}

function factorial(n){
    if (n <= 1) return 1;
        
    return n * factorial(n-1);
}