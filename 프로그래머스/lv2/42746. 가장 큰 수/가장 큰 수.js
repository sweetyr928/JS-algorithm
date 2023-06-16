function solution(numbers) {
    let answer = numbers.map(el => String(el))
    .sort((a,b) => (b+a) - (a+b)).join('');
    
    return +answer ? answer : '0';
}