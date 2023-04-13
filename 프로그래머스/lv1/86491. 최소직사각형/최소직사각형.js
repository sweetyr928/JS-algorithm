function solution(sizes) {
    // 1. 가로 길이 < 세로 길이 : 두 값 바꿔주기
    // 2. 다 바꿨으면 가로길이 기준 정렬 후 마지막 값 * 세로길이 기준 정렬 후 마지막 값
    for(let i=0;i<sizes.length;i++){
        let temp = 0;
        if(sizes[i][0] < sizes[i][1]){
            temp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
    }
    
    let temp_width = sizes.slice().sort((a,b) => b[0] - a[0]);
    let temp_height = sizes.slice().sort((a,b) => b[1] - a[1]);
    
    console.log(temp_width,temp_height)
    
    return temp_width[0][0] * temp_height[0][1];
}