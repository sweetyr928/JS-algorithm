function solution(priorities, location) {
    let work = priorities.map((el,idx) => [el,idx])
    let queue = []
    
    while(work.length){
        let cur = work.shift()
        if(cur[0] >= Math.max(...work.map((el)=>el[0]))){
            queue.push(cur[1])
            if(cur[1] === location) return queue.indexOf(cur[1])+1
        }else{
            work.push(cur)
        }
    }
}