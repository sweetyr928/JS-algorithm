function solution(sizes) {
    for(let i = 0;i < sizes.length;i++){
        if(sizes[i][0] < sizes[i][1]) [sizes[i][0],sizes[i][1]] = [sizes[i][1],sizes[i][0]]
    }
    
    let temp_width = sizes.slice().sort((a, b) => b[0] - a[0])
    let temp_height = sizes.slice().sort((a, b) => b[1] - a[1])
    
    return temp_width[0][0] * temp_height[0][1]
}