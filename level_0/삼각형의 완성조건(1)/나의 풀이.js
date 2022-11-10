function solution(sides) {
    const soor = sides.sort((a,b) => b - a);
    return soor[0] < soor[1] + soor[2] ? 1 : 2
}