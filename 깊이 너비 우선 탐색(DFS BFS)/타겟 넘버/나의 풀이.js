function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;
  const dfs = (cnt, sum) => {
    if (cnt === n) {
      if (target === sum) {
        answer++;
      }
      return;
    }

    dfs(cnt + 1, sum - numbers[cnt]);
    dfs(cnt + 1, sum + numbers[cnt]);
  };

  dfs(0, 0);

  return answer;
}
