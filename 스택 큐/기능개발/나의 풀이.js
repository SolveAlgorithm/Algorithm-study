function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((i, idx) => Math.ceil((100 - i) / speeds[idx]));
  const maxNum = Math.max(...days);
  let cnt = 0;
  for (i = 1; i <= maxNum; i++) {
    while (days[0] <= i) {
      days.shift();
      cnt++;
    }
    if (cnt) answer.push(cnt);
    cnt = 0;
  }
  return answer;
}
