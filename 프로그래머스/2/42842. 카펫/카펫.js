function solution(brown, yellow) {
    // yellow가 1이면 1/2 때문에 for문이 돌 수가 없어 early return
    if(yellow === 1) return [3,3]
    
    let width, height
    
    for(let i = 1;i <= yellow / 2;i++){
        if((2 * (i + 2) + 2 * (yellow / i)) === brown){
            // height는 width보다 작거나 같기 때문에
            // i+2는 height가 되어야 한다.
            height = i + 2
            width = yellow / i + 2
            break
        }
    }
    
    return [width,height]
}