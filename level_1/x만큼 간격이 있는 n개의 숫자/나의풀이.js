function solution(x, n) {
  let answer = [];
  let xx = x;
  for (let i = 0; i < n; i++) {
    answer.push(xx);
    xx += x;
  }
  return answer;
}
