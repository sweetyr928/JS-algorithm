function solution(n, wires) {
    let answer = 0
    let tree = {}
    wires.map((el) => {
        if(!(el[0] in tree)) tree[el[0]] = []
        if(!(el[1] in tree)) tree[el[1]] = []
        tree[el[0]].push(el[1])
        tree[el[1]].push(el[0])
    });
    
    const edge = (root, except) => {
        let count = 0
        let queue = [root]
        let visited = []
        visited[root] = true
        
        while(queue.length > 0){
            let cur = queue.pop()
            tree[cur].map((el) => {
                if(el!==except && !visited[el]) {
                    queue.push(el)
                    visited[el] = true
                }
            })
            count++
        }
        
        return count
    }
    
    answer = 100
    
    wires.map((el) => {
        let temp = Math.abs(edge(el[0],el[1]) - edge(el[1],el[0]))
        if(answer > temp) answer = temp
    })
    
    return answer
}