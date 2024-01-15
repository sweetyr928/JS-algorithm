function solution(n) {
    let ans = ''
    let arr = ['4','1','2']
    
    while(n>0){
        ans = arr[n%3] + ans
        
        n = Math.ceil(n/3-1)
    }
    
    return ans
}