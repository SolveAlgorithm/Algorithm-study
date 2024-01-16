function solution(k, tangerine) {
  const countTangerineSize = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const numberTangerineSize = Object.values(countTangerineSize).sort(
    (a, b) => b - a
  );
  let cnt = 0;
  let K = k;
  while (K > 0) {
    K -= numberTangerineSize[cnt++];
  }
  return cnt;
}
