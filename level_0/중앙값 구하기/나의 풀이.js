function solution(array) {
    const so = array.sort((next, prev) => next - prev)
    return so[Math.floor(array.length/2)]
}