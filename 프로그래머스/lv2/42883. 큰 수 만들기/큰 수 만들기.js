function solution(number, k) {
    let stack = [];
	// 원본 배열도 스택으로 만들기
    let arr = number.split('').reverse();

    while(arr.length && k > 0){
        stack.push(arr.pop())
        while(stack[stack.length-1] < arr[arr.length-1] && k>0) {
            stack.pop();
            k = k-1;
        }
    }
	// 원본 배열에서 다 스택으로 꺼냈는데도 k가 0 이상이라면 스택 뒤에서 자르기
    if(k !== 0) stack = stack.slice(0, -k) 

    return stack.join('') + arr.reverse().join('')
}