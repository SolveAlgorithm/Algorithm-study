function solution(d, budget) {
    let n = 0;
    const arr = d.sort((a,b) => a-b).filter((i) => {
        n += i
        return n <= budget
    })
    return arr.length
}