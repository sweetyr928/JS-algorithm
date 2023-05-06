function solution(orders, course) {
    // 해시 맵에 조합 및 갯수 저장
    let map = new Map();
    let set = new Set();
    let best = new Array(course.length).fill(0);
    let answer = [];
    
    // 각 orders에 대한 조합 만들기 
    const makeC = (arr,str) => {
        if(course.includes(str.length)){ 
            map.set(str, map.get(str) + 1 || 1);
            if(best[course.indexOf(str.length)] < map.get(str)) 
                best[course.indexOf(str.length)] = map.get(str);
        }
        
        for(let i=0;i<arr.length;i++){
            let newStr = (str + arr[i]).split("").sort().join("");
            let newArr = arr.slice();
            newArr.splice(i,1);
            if(!set.has(newStr)){
                set.add(newStr);
                makeC(newArr, newStr);
            }
        }
    }
    
    for(let i=0;i<orders.length;i++){
        makeC(orders[i].split(""),"");
        set = new Set();
    }
    
    for(let [k,v] of map){
        if(v >= 2 && v === best[course.indexOf(k.length)]) answer.push(k);
    }
    
    return answer.sort();
}