function solution(sides) {
    const max = Math.max(...sides);
    const sum = sides.reduce((a,b) => a + b, 0) - max;
    return max < sum ? 1 : 2;
}

function solution(sides) {
    return Math.min(...sides)*2-1
}