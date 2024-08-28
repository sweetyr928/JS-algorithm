function solution(record) {
    let answer = [];
    let newRecord = [];
    let map = new Map();
    
    for(let i = 0;i<record.length;i++){
        newRecord.push(record[i].split(" "));
        if(record[i].split(" ")[0] !== "Leave") 
            map.set(record[i].split(" ")[1], record[i].split(" ")[2]);
    }
    
    for(let i=0;i<newRecord.length;i++){
        if(newRecord[i][0] === "Enter") answer.push(map.get(newRecord[i][1]) + "님이 들어왔습니다.");
        else if(newRecord[i][0] === "Leave") answer.push(map.get(newRecord[i][1]) + "님이 나갔습니다.");
    }
    
    return answer;
}