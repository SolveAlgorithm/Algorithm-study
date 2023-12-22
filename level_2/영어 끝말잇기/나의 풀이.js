function solution(n, words) {
  let temp = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1].slice(-1) !== words[i].slice(0, 1) ||
      temp.includes(words[i])
    ) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
    temp.push(words[i]);
  }
  return [0, 0];
}
