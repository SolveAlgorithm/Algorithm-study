function solution(numbers, k) {
    const a = numbers[(k-1)*2 % numbers.length]
    return a;
}
