function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    cities = cities.map((el) => el.toLowerCase());
    let answer = 0;
    let cache = [];
    
    for(let i = 0;i < cities.length;i++){        
        if(!cache.includes(cities[i]) && cache.length < cacheSize) {
            cache.push(cities[i]);
            answer += 5;
        }else if(!cache.includes(cities[i]) && cache.length === cacheSize){
            cache.push(cities[i]);
            cache.shift();
            answer += 5;
        }
        else{
            let temp = cache.filter((el) => el !== cities[i]);
            temp.push(cities[i]);
            cache = temp;
            answer++;
        }
    }
    
    return answer;
}