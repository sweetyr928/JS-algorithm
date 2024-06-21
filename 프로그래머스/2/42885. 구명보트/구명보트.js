function solution(people, limit) {
    let sortedList = people.sort((a, b) => a - b)
    let answer = 0
    
    while(sortedList.length){
        if(sortedList[0] + sortedList[sortedList.length - 1] <= limit){
            sortedList.shift()
        }
        sortedList.pop()
        answer++
    }
    
    return answer
}