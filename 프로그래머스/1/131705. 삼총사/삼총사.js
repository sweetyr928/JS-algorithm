function solution(number) {
    // 첫번째 코드
//     let answer = 0
//     let stack = []
    
//     const dfs = (fixed, arr) => {
//         let count = 0
//         for(let i=0;i<arr.length;i++){
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[i] + arr[j] === -fixed){
//                     let temp = [fixed,arr[i],arr[j]].sort((a,b) => a-b)
//                     let tempStr = temp.join('')
//                     if(!(stack.includes(tempStr))){
//                         stack.push(tempStr)
//                         count++   
//                     }
//                 }
//             }
//         }
        
//         return count
//     }
    
//     for(let i=0;i<number.length;i++){
//         let newNumber = number.slice()
//         newNumber.splice(i,1)
//         let consequence = dfs(number[i], newNumber)
//         if(consequence > 0) answer += consequence
//     }
    
//     return answer;
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }

    return count;
}