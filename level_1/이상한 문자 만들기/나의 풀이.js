function solution(s) {
  let answer = [];
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    answer.push(
      s[i]
        .split("")
        .map((cur, index) =>
          index % 2 ? cur.toLowerCase() : cur.toUpperCase()
        )
        .join("")
    );
  }
  return answer.join(" ");
}
