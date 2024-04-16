function solution(k, tangerine) {
    let map = new Map()
    let temp = 0, i = 0
    
    for(let i=0;i<tangerine.length;i++){
        map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1)
    }

    const arr = [...map].sort((a,b) => b[1]-a[1])
    
    while(temp < k){
      if(arr[i][1] >= k) return i+1
      if(temp < k){
        temp += arr[i][1]
        i++
      }
    }
    
    return i
}