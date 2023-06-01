function solution(str1, str2) {
    let answer = 0;
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    const arr1 = [], arr2 = [];

    for(let i=0;i<str1.length-1;i++){
        if(str1[i] >= "A" && str1[i] <= "Z" && str1[i+1] >= "A" && str1[i+1] <= "Z")
            arr1.push(str1[i]+str1[i+1]);
    }
    for(let i=0;i<str2.length-1;i++){
        if(str2[i] >= "A" && str2[i] <= "Z" && str2[i+1] >= "A" && str2[i+1] <= "Z")
            arr2.push(str2[i]+str2[i+1]);
    }
     
    const intersection = [];
    const union = [];
    
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i]))
            intersection.push(arr2.splice(arr2.indexOf(arr1[i]), 1));
        union.push(arr1[i]);
    }
    for(let i=0;i<arr2.length;i++){
        union.push(arr2[i]);
    }
    
    if(!intersection.length && !union.length) return 65536;
    
    return Math.floor(65536 * (intersection.length/union.length));
}