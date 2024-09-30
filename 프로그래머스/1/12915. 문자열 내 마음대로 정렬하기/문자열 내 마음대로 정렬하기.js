function solution(strings, n) {
    let newStr = strings.sort((a, b) => {
      if(a.charAt(n) > b.charAt(n)){
        return 1;
      }
      if(a.charAt(n) < b.charAt(n)){
        return -1;
      }else{
        return a > b ? 1:-1;
      }
    })
    
    return newStr;
}