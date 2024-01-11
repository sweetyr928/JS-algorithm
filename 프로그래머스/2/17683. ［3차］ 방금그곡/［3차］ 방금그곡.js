function solution(m, musicinfos) {
    let answer = "(None)"
    let longestTime = 0
    
    const getMinuate = (time) => {
        const [hh,mm] = time.split(":")
        return +hh * 60 + +mm
    }
    
    const getArray = (str) => {
        let arr = []
        for(let i=0;i<str.length;i++){
            let temp = str[i]
            if(str[i] === "#") continue
            if(str[i+1] === "#") temp += str[i+1]
            arr.push(temp)
        }
        
        return arr
    }
    
    const checkMelody = (all, part) => {
        if(all.indexOf(part) !== -1){
            let next = all.indexOf(part) + part.length
            
            if(all[next] === "#") return checkMelody(all.slice(next+1), part)
            
            return true
        }
        
        return false
    }
    
    for(let i=0;i<musicinfos.length;i++){
        const [start,end,name,code] = musicinfos[i].split(",")
        const tempTime = getMinuate(end) - getMinuate(start)
        let allMelody = ""
        let codeToArr = getArray(code)
        for(let j=0;j<tempTime;j++)
            allMelody += codeToArr[j%codeToArr.length]
        
        if(checkMelody(allMelody,m) && longestTime < tempTime){
            answer = name
            longestTime = tempTime
        }
    }
    
    return answer
}