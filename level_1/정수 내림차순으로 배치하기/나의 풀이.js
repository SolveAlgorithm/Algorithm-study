function solution(n) {
  n = (n + "").split("");
  n.sort((a, b) => b - a);
  n = Number(n.join(""));
  return n;
}
