function solution(k, dungeons) {
  let answer = [];
  const n = dungeons.length;
  let ch = Array.from({ length: n }, () => 0);

  const dfs = (cnt, k) => {
    answer.push(cnt);
    for (let i = 0; i < n; i++) {
      const curDun = dungeons[i];
      if (k >= curDun[0] && !ch[i]) {
        ch[i] = 1;
        dfs(cnt + 1, k - curDun[1]);
        ch[i] = 0;
      }
    }
  };
  dfs(0, k);
  return Math.max(...answer);
}
