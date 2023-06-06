function solution(files) {
    const answer = [];
    
    files.forEach((file) => {
        let part = ['','',''];
        [...file].forEach((word) => {
            if(isNaN(parseInt(word)) && !part[1].length) part[0] += word;
            else if(!isNaN(parseInt(word)) && !part[2].length) part[1] += word;
            else part[2] += word;
        })
        answer.push(part);
    })
    
    answer.sort((a,b) => {
        let newA = a[0].toUpperCase(), newB = b[0].toUpperCase();
        if(newA > newB) return 1;
        else if(newA < newB) return -1;
        else return parseInt(a[1]) - parseInt(b[1])
    })
    
    return answer.map((el) => el.join(""));
}