function solution(skill, skill_trees) {
    let newSkill = {};
    for(let i=0;i<skill.length;i++) newSkill[skill[i]] = i;
    let answer = 0;
    
    for(let i=0;i<skill_trees.length;i++){
        let temp = skill_trees[i].split("").filter(el => skill.includes(el));
        let temp2 = temp.slice().filter((el,idx) => el === skill[idx]);
        temp.length === temp2.length ? answer++ : null;
    }
    
    return answer;
}

// "CBD", ["CAD"] 0
// "CBD", ["AEF", "ZJW"] 2
// "REA", ["REA", "POA"] 1
// "CBDK", ["CB", "CXYB", "BD", "AECD", "ABC", "AEX", "CDB", "CBKD", "IJCB", "LMDK"] 4
// "BDC", ["AAAABACA"] 0
// "CBD", ["C", "D", "CB", "BDA"] 2