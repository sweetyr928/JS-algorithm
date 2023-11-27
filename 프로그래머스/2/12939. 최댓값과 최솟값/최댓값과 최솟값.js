function solution(s) {
    // 방법 1 -> sort 보다 얘가 더 빠른 듯
    // let arr = s.split(' ')
    
    // return Math.min(...arr)+ ' ' + Math.max(...arr)
    
    // 방법 2
    let arr = s.split(' ').sort((a,b) => a-b)
    
    return arr[0] + ' ' + arr[arr.length-1]
}
