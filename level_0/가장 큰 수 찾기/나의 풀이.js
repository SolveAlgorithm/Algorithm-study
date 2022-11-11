function solution(array) {
    return [Math.max(...array) , array.findIndex(i => i === Math.max(...array) )];
}