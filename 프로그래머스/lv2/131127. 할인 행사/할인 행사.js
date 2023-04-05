function solution(want, number, discount) {
  let answer = 0;
  
  // 할인 품목과 원하는 제품이 일치하는지 확인하는 함수
  const isMatch = (arr) => { 
      let map = new Map();   // 매번 map을 초기화
      arr.forEach(el => map.set(el,(map.get(el)||0)+1)); // 할인 품목들을 map에 셋팅
      for(let i = 0; i < want.length; i++){
          // 원하는 품목의 수량과 할인 품목이 일치하지 않으면 false
          if(map.get(want[i]) !== number[i]) return false;
      }             
      return true;  
  }
  
  for(let j = 0; j <= discount.length - 10; j++){
      let arr = discount.slice(j, j+10);
      if(isMatch(arr)){
          answer++;
      } 
  }
    return answer;
}