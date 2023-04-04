function solution(operations) {
    let temp = [];
    
    for(let i=0;i<operations.length;i++){
        let [o,n] = operations[i].split(" ");
        if(o === "I") temp.push(Number(n));
        if(o === "D" && n === "1"){
            let max = Math.max(...temp);
            temp.splice(temp.indexOf(max),1);
        }
        if(o === "D" && n === "-1"){
            let min = Math.min(...temp);
            temp.splice(temp.indexOf(min),1);
        }
    }
    
    if (temp.length === 0) return [0,0];
    
    return [Math.max(...temp),Math.min(...temp)];
}