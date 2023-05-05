function solution(user_id, banned_id) {
    const ch = Array.from({length:user_id.length}, () => 0); // 유저 벤 여부
    const set = new Set(); // 순서에 따른 중복 없애주기 위한 Set
    
    // 제재 아이디 후보로 가능한지 확인하는 함수
    const isPossible = (uId, bId) => {
        // 1. 문자열 길이 비교
        if (uId.length !== bId.length) return false;
        // 2. 값이 '*'이 아닌 자리의 문자가 모두 같은지 확인
        let cnt = 0;
        for (let i = 0; i < uId.length; i++) {
            if (bId[i] !== '*' && uId[i] !== bId[i]) return false;
        }
        return true;
    }
    
    const check = (idx, cnt, possible) => {
        // 최종 제재 아이디가 담긴 문자열을 배열로 바꿔주기
        if (cnt === banned_id.length) {
            let arr = possible.split(' ');
            arr.shift(); // 맨 앞에 저장된 '' 값 제거
            arr.sort();
            let newStr = arr.join('');
            set.add(newStr);
        }
        if (idx >= user_id.length) return;
        
        for (let i = idx; i < banned_id.length; i++) {
            for (let j = 0; j < user_id.length; j++) {
                if (ch[j] === 1) continue; // 이미 벤된 아이디면 다음 순서로
                if (!isPossible(user_id[j], banned_id[i])) continue; // 비교대상에 맞지 않으면 다음 순서로
                ch[j] = 1;
                // 만약 조건에 맞다면 그 아이디를 문자열로 연결해서 저장
                check(i+1, cnt+1, possible + ' ' + user_id[j]); 
                ch[j] = 0; // 다음 재귀를 위해 다시 0으로
            }
        }
    }
    
    // 벤된 id 다음 순서(다음으로 비교할 idx), 벤된 id 개수, 후보 문자열로 저장
    check(0, 0, ''); 
    
    return set.size;
}