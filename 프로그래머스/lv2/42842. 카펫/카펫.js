function solution(brown, yellow) {
    let width; let height;
    if(yellow === 1) return [3,3];
    
    for(let i=1;i<=yellow/2;i++){
        if((i+2)*2 + yellow/i*2 === brown) {
            width = yellow/i+2;
            height = i+2;
            break;
        }
    }
    
    return [width,height];
}