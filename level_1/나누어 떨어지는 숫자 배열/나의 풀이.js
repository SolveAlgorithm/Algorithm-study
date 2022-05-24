function solution(arr, divisor) {
  let answer = arr.filter((number) => number % divisor === 0);
  return answer.length == 0 ? [-1] : answer.sort((next, prev) => next - prev);
}
