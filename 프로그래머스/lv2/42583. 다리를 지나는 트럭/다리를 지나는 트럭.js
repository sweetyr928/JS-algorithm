function solution(bridge_length, weight, truck_weights) {
    // 시간
    let count = 0;
    // 큐. 다리에 올라갈 수 있는 최대 트럭 갯수만큼 배열을 만들어주고, 요소의 값을 0으로 채움
    let queue = new Array(bridge_length).fill(0);
    // 다리에 올라가있는 트럭 무게의 총 합
    let totalWeight = 0;
    
    // 처음 올라가는 트럭. 앞이 출구 뒤가 입구.
    let currentTruck = truck_weights.shift();
    queue.push(currentTruck);
    queue.shift();
    totalWeight += currentTruck;
    count++;
    
    // 큐의 데이터 합이 0이 될 때까지 반복
    while(totalWeight){
        // 1. 큐 요소들을 한 칸 앞으로 옮긴 후
        totalWeight -= queue.shift();
        currentTruck = truck_weights.shift();
        // 2-1. currentTruck의 무게와 현재 다리 위에 있는 트럭의 총 무게의 합이 weight보다 작거나 같다면
        if(currentTruck + totalWeight <= weight){
           // 다리에 트럭 하나 더 추가
            queue.push(currentTruck);
            totalWeight += currentTruck;
        }// 2-2. currentTruck의 무게와 현재 다리 위에 있는 트럭의 총 무게의 합이 weight보다 크다면
        else{
            // 큐 길이 원상복구('큐 길이 = 다리 길이' 유지되어야하기 때문)
            truck_weights.unshift(currentTruck);
            queue.push(0);
        }
        count++;
    }
    
    return count;
}