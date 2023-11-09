function solution(numbers) {
  const answer = [];
  const n = numbers.length;
  let ch = Array.from({ length: n }, () => 0);

  const dfs = (curStr) => {
    answer.push(+curStr);
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        dfs(curStr + numbers[i]);
        ch[i] = 0;
      }
    }
  };
  dfs("");
  answer.shift();
  return [...new Set(answer.filter((i) => isPrime(i)))].length;
}

const isPrime = (num) => {
  for (i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
