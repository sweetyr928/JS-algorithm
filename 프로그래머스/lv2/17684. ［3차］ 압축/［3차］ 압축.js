function solution(msg) {
    let answer = [];
    msg = msg.split('');
    const dic = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,
                "L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,
                "X":24,"Y":25,"Z":26}
    let w = msg[0];
    let last = 26;
   
    while(msg.length){
        if(!((w + msg[1]) in dic)){
            answer.push(dic[w]);
            msg.splice(0,1);
            dic[w + msg[0]] = last + 1;
            last ++;
        }else{
            for(let i=1;i<msg.length;i++){
              if((w + msg[i]) in dic) w += msg[i];
              else break;
            }
            answer.push(dic[w]);
                msg.splice(0,w.length);
                dic[w + msg[0]] = last + 1;
                last ++;
        }
        w = msg[0];
    }
    
    return answer;
}