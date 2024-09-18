function solution(progresses, speeds) {
    let answer = []
    let time = progresses.map((el,idx) => Math.ceil((100 -el)/speeds[idx]))
    let max = time[0]
    let cnt = 0
    
    time.map((el) => {
        if(max >= el){
            cnt++
        }else{
            answer.push(cnt)
            cnt = 1
            max = el
        }
    })
    
    answer.push(cnt)
    
    return answer
}