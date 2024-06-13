function solution(brown, yellow) {
    if(yellow === 1) return [3,3]
    
    let width, height
    
    for(let i = 1;i <= yellow / 2;i++){
        if((2 * (i + 2) + 2 * (yellow / i)) === brown){
            height = i + 2
            width = yellow / i + 2
            break
        }
    }
    
    return [width,height]
}