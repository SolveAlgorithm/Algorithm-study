function solution(s) {
  let answer = [];
  let temp = [];
  s.split("").map((i, idx) => {
    if (!temp.includes(i)) answer.push(-1);
    else answer.push(idx - temp.lastIndexOf(i));
    temp.push(i);
  });
  return answer;
}
