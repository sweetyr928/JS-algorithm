function solution(arr1, arr2) {
    let answer = []
    let temp = new Array(arr2[0].length).fill(0)
    
    for(let i=0;i<arr1.length;i++){
        temp = new Array(arr2[0].length).fill(0)
        for(let j=0;j<arr2[0].length;j++){
            for(let k=0;k<arr2.length;k++){
                temp[j] += arr1[i][k] * arr2[k][j]
            }
        }
        answer.push(temp)
    }
    
    return answer
}