function solution(arr) {
    // 최소 공배수를 구하는 것이므로 0번째 요소에 +1씩 증가하는 숫자를 계속 곱해준다.
    let n = 1, flag = false;
    while(!flag)
    {
        n++;
        for(let i = 1; i < arr.length; ++i){
            if((arr[0] * n) % arr[i]  === 0){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }

    return arr[0] * n;
}