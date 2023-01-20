function solution(sides) {
    const soor = sides.sort((a,b) => b - a);
    return soor[0] < soor[1] + soor[2] ? 1 : 2
}

function solution(sides) {
    let nums = sides.sort((a,b) => a-b)
    const a = nums[0]
    const b = nums[1]
    return (b-(b-a)) + (a-1)
}