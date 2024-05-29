function solution(nums) {
    let map = new Map()
    
    for(let i = 0;i < nums.length;i++)
        map.set(nums[i], map.get(nums[i] || 0) + 1)
    
    
    return map.size > nums.length / 2 ? nums.length / 2 : map.size
}