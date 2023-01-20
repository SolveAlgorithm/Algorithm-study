function solution(score) {
    const arr = score.map((i) => i[0] + i[1]);
    const arrSort = score.map((i) => i[0] + i[1]).sort((a, b) =>  a == b ? 0 : a > b ? -1 : 1);
    return arr.map((i) => arrSort.indexOf(i)+1)
}