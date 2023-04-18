const solution = (files) => {
  // 파싱된 파일을 저장하는 배열  
  const parsedFile = [];
    files.forEach(file => {
        const parts = ['', '', ''];
        [...file].forEach(word => {
            const isNumber = !isNaN(parseInt(word));
            // 만약 지금 글자가 숫자가 아니고 NUMBER 배열이 비어진 상태라면 ==> HEAD에 들어가야 한다.
            if (!isNumber && !parts[1].length) {
                parts[0] += word;
            // 만약 지금 글자가 숫자이고, TAIL 배열이 비어진 상태라면 ==> NUMBER에 들어가야 한다.
            } else if (isNumber && !parts[2].length) {
                parts[1] += word;
            // 그 외에는 TAIL에 추가.
            } else {
                parts[2] += word;
            }
        })  
        parsedFile.push(parts)
    });
  
    parsedFile.sort((a, b) => {
        const stringA = a[0].toUpperCase(), stringB = b[0].toUpperCase();
      	// HEAD 정렬 : 앞 단어의 첫 글자가 사전 순 뒤이면 자리 바꾸기
        if (stringA > stringB) {
            return 1;
        // HEAD 정렬 : 앞 단어의 첫 글자가 사전 순 앞이면 자리 유지
        } else if (stringA < stringB) {
            return -1;
        // 각 단어의 첫 글자가 같으면 NUMBER 정렬
        } else {
            const parseIntA = parseInt(a[1]), parseIntB = parseInt(b[1]);
            return parseIntA - parseIntB;
        }
    })
    
    return parsedFile.map(arr => arr.join(''))
}