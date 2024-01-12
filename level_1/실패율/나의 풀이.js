function solution(N, stages) {
  let failArr = [];
  let stagesL = stages.length;

  for (let i = 1; i <= N; i++) {
    let failState = stages.filter((v) => v === i).length;
    failArr.push([i, failState / stagesL]);
    stagesL = stagesL - failState;
  }
  const answer = failArr.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
}
