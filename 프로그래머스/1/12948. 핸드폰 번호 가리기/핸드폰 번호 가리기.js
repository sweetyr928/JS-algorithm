function solution(phone_number) {
    let behindFour = phone_number.slice(-4)
    let star = ''
    
    for(let i=0;i<phone_number.length - behindFour.length;i++){
        star += '*'
    }
    
    return star + behindFour
}