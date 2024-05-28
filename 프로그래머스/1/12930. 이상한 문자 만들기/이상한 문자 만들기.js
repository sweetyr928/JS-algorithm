function solution(s) {
    let answer = ''
    let arr = s.split(' ')
    let temp = ''
    
    for(let i = 0;i < arr.length;i++){
        if(arr[i].length > 0){
            temp = ''
            for(let j = 0;j < arr[i].length;j++){
                if(j % 2===0){
                    temp += arr[i][j].toUpperCase()
                }else{
                    temp += arr[i][j].toLowerCase()
                }
            }
            arr[i] = temp
        }
    }
    answer = arr.join(' ')
    
    return answer
}