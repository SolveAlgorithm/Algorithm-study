function solution(n, m) {
  const min = (a, b) => {
    if (b === 0) {
      return a;
    }
    return min(b, a % b);
  };
  const minN = min(n, m);
  const maxN = (n * m) / minN;
  return [minN, maxN];
}
