function solution(numbers) {
  // 먼저 numbers의 길이 만큼 -1을 채운 배열을 만들어준다.
  const answer = new Array(numbers.length).fill(-1);
  // 인덱스를 넣을 배열
  const stack = [];

  // numbers의 길이 만큼 for문을 돌려 하나씩 확인한다.
  for (let i = 0; i < numbers.length; i++) {
    // 인덱스가 존재하고 해당 존재하는 인덱스 순서의 숫자가 현재 수 보다 작을 경우 
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      // answer의 인덱스 위치에 현재 들어온 수를 넣어준다.
      answer[stack.pop()] = numbers[i];
    }

    // 스택이 비었다면(조건 미충족 되었으면) 현재 인덱스를 넣어준 후 뒷 큰수가 나올 때까지 기다린다.
    stack.push(i);
  }

  // 마지막은 확인할 수 없으므로 미리 세팅한 -1 그대로 남는다.
  return answer;
}