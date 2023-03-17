function solution(n) {
    let i = n+1;
    while(true){
        if((i).toString(2).split("").filter((el) => el === "1").length === n.toString(2).split("").filter((el) => el === "1").length) break;
        else i++;
    }
    
    return i;
}