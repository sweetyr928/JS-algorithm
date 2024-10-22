function solution(s) {
    let ans = [], newS = [], i= 2, tempS = "", temp = []
  
    while(i < s.length-1){ 
      if(!isNaN(s[i])) tempS += s[i]
        
      if(s[i] === "," && s[i+1] !== "{"){
        temp.push(+tempS)
        tempS = ""
      }
        
      if(s[i] === "}"){
        temp.push(+tempS)
        newS.push(temp)
        temp = []
        tempS = ""
      }
        
      i++
    }
  
    newS.sort((a,b) => a.length - b.length)
  
    for(let i = 0;i < newS.length;i++){
          for(let j = 0;j < newS[i].length;j++){
            if(!ans.includes(newS[i][j])) 
                ans.push(newS[i][j])
          }
    }
    
    return ans
}