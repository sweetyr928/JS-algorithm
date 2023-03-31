function solution(elements) {
    // 중복 차단을 위해 Set 선언
    const set = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        // 원순열 만들기: i개의 원소를 뒤에 추가해준다
        const els = elements.concat(elements.slice(0, i));
        // 원순열 갱신
        for (let j = 0; j < elements.length; j++) {
            set.add(els.slice(j, j + i).reduce((a, c) => a + c, 0));
        }
    }
    
  return set.size;
}