function solution(numbers) {
    let answer = 1+2+3+4+5+6+7+8+9
    
    return answer - numbers.reduce((a,c) => a += c)
}