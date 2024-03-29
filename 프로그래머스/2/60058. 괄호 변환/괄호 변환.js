const isRight = (str) => {
    let open = [];
    for(let i=0;i<str.length;i++){
        if(str[i]==='(') open.push(str[i])
        else if(str[i]===')' && open.length!==0) open.pop()
        else return false
    }
    return open.length === 0 ? true : false
}

function solution(p) {
    if(p.length === 0) return p
    let answer = '';let countO = 0, countC = 0;let u = '', v = ''
    for(let i=0;i<p.length;i++){
        if(p[i] === '(') countO++
        if(p[i] === ')') countC++
        if(countO===countC){
            u = p.slice(0,i+1); v = p.slice(i+1,p.length)
            break
        }
    }
    if(isRight(u)){
        answer = u + solution(v)
    }else{
        let newU = '';
        for(let i=1;i<u.length-1;i++){
            if(u[i] === '(') newU += ')'
            else newU += '('
        }
        answer = '(' + solution(v) + ')' + newU
    }
    
    return answer
}