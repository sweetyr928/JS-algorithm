function solution(s) {
    let cnt = 0
    
    isRight(s) ? cnt++ : null
    let newS = s.slice()
    
    for(let i = 1;i < s.length;i++){
        newS = newS.slice(1) + newS[0]
        isRight(newS) ? cnt++ : null
    }
    
    return cnt
}

function isRight(str){
    let stack = []
    if(str[0] === ")" || str[0] === "]" || str[0] === "}") return false
    
    for(let i = 0;i < str.length;i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{") stack.push(str[i])
        else if(str[i]===")" && stack[stack.length-1]==="(" || str[i]==="}" && stack[stack.length-1]==="{" || str[i]==="]" && stack[stack.length-1]==="[") stack.pop()
    }
    
    return stack.length === 0 ? true : false
}