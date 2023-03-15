function solution(s) {
    let arr = s.toLowerCase().split(" ");
    
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i][0]) && arr[i].length !== 0) arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join(" ");
}