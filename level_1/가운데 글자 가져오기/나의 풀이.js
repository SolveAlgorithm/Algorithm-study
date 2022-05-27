function solution(s) {
  let answer = s.substr(
    s.length % 2 ? Math.floor(s.length / 2) : Math.floor(s.length / 2) - 1,
    s.length % 2 ? 1 : 2
  );
  return answer;
}
