function solution(before, after) {
    const arr = [...before].sort().join('')
    const arr2 = [...after].sort().join('')
    return arr === arr2 ? 1 : 0
}