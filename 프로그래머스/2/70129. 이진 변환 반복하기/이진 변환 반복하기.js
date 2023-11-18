function solution(s) {
    let count = 0
    let totalZero = 0
    
    while(s.length > 1){
        let noZeroStr = s.split('').filter(el => el > 0).join('')
        totalZero += s.length - noZeroStr.length
        s = noZeroStr.length.toString(2)
        count++
    }
    
    return [count, totalZero]
}