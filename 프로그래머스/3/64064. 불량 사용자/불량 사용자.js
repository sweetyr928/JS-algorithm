function solution(user_id, banned_id) {
    const ch = new Array(user_id.length).fill(0)
    const set = new Set()
    
    const isPossible = (uId, bId) => {
        if (uId.length !== bId.length) return false
        for (let i = 0; i < uId.length; i++) {
            if (bId[i] !== '*' && uId[i] !== bId[i]) return false
        }
        
        return true
    }
    
    const check = (idx, cnt, possible) => {
        if (cnt === banned_id.length) 
            set.add(possible.split(' ').sort().join(''))
        if (idx >= banned_id.length) return
        
        for (let i = idx; i < banned_id.length; i++) {
            for (let j = 0; j < user_id.length; j++) {
                if (ch[j] === 1) continue
                if (!isPossible(user_id[j], banned_id[i])) continue
                
                ch[j] = 1
                check(i+1, cnt+1, possible + ' ' + user_id[j])
                ch[j] = 0
            }
        }
    }
    
    check(0, 0, '')
    
    return set.size
}