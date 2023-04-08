function solution(fees, records) {
    let newR = [],car = {}, map = new Map(), fee = [], temp = [];
    
    for(let i=0;i<records.length;i++){
        newR.push(records[i].split(" "));
        if(!(records[i].split(" ")[1] in car)) car[records[i].split(" ")[1]] = [];
    }
  
    while(newR.length){
        let time = Number(newR[0][0].split(":")[0]) * 60 + Number(newR[0][0].split(":")[1]);
        if(newR[0][2] === "IN") {
          temp.push(newR[0][1])
          map.set(newR[0][1], time);
        }else{
          car[newR[0][1]].push(time - map.get(newR[0][1]));
          map.set(newR[0][1],0);
          temp.splice(temp.indexOf(newR[0][1]),1);
        }
        newR.shift();
    }
  
    if(temp.length){
        for(let i=0;i<temp.length;i++){
          car[temp[i]].push((23 * 60 + 59) - map.get(temp[i]))
        }
    }       

    for(let key in car){
      let total = car[key].reduce((a,c) => a+=c,0) > fees[0] ? Math.ceil((car[key].reduce((a,c) => a+=c,0) - fees[0])/fees[2]) * fees[3] : 0;
      fee.push([key,fees[1] + total])
      total = 0;
    }
    
    return fee.sort((a,b) => a[0] - b[0]).map(el => el[1]);
}