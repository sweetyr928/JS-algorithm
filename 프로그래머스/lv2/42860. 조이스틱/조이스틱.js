function solution(name) {
    let tb = 0;
    let lr = name.length - 1;
    
    [...name].map((n, i) =>{
        tb += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
        let idx = i + 1;
        
        while(idx < name.length && name[idx] === "A") idx++;
        
        lr = Math.min(
            lr,
            i * 2 + name.length - idx,
            i + 2 * (name.length - idx)
        )
    })
    
    return tb + lr;
}