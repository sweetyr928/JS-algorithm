function solution(s) {
    let strToNum = ""
    
    if(s.length === 4 || s.length === 6){
      for(let i = 0;i < s.length;i++){
        strToNum += Number(s[i])
      }
        return strToNum === s
    }else{
        return false
    }
}
