function solution(topping) {
  let answer = 0;

  const total = new Map();
  const brother = new Set();

  // Map 자료구조에 각 토핑의 개수가 몇개인지 넣어준다.
  // {1 => 4, 2 => 2, 3 => 1, 4 => 1}
  topping.forEach((n) => {
    total.set(n, (total.get(n) || 0) + 1);
  });

  for (let n of topping) {
    // 토핑을 하나씩 확인하면서 total에서 해당 토핑의 갯수를 하나씩 빼준다.
    total.set(n, total.get(n) - 1);

    // 해당 토핑을 brother Set에 넣는다.
    brother.add(n);

    // total에서 현재 토핑의 갯수가 0이되면 그 토핑을 지워준다.
    if (!total.get(n)) total.delete(n);

    // total의 크기와 brother의 크기가 같으면 answer을 1 증가시켜준다.
    if (total.size === brother.size) answer++;

    // 동생이 가진 토핑 종류가 많아지면 이 이후로는 동생의 토핑 개수만 증가하는 것이기 때문에
    // break를 통해 비교를 종료한다.
    if (total.size < brother.size) break;
  }

  return answer;
}