function solution(n) {
  n = n
    .toString()
    .split("")
    .reverse()
    .map((st) => parseInt(st));
  return n;
}
