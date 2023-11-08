function solution(answers) {
  let answer = [];
  let cntArr = [0, 0, 0];
  const an1 = [1, 2, 3, 4, 5];
  const an2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const an3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.map((i, idx) => {
    if (i === an1[idx % an1.length]) cntArr[0]++;
    if (i === an2[idx % an2.length]) cntArr[1]++;
    if (i === an3[idx % an3.length]) cntArr[2]++;
  });
  for (i = 1; i < cntArr.length + 1; i++) {
    if (cntArr[i - 1] === Math.max(...cntArr)) answer.push(i);
  }

  return answer;
}
