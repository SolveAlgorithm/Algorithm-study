function solution(n, a, b) {
  var mid = (n + 1) / 2;

  if (a > mid && b < mid) {
    return Math.log2(n);
  } else if (a < mid && b > mid) {
    return Math.log2(n);
  } else {
    if (a < mid && b < mid) {
      return solution(n / 2, a, b);
    } else {
      return solution(n / 2, a - n / 2, b - n / 2);
    }
  }
}
