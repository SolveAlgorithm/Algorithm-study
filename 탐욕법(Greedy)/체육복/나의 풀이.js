function solution(n, lost, reserve) {
  let lostStu = lost.filter((i) => !reserve.includes(i)).sort();
  let reserveStu = reserve.filter((i) => !lost.includes(i)).sort();

  for (let i = 0; i < reserveStu.length; i++) {
    if (lostStu.includes(reserveStu[i] - 1)) {
      lostStu = lostStu.filter((v) => v !== reserveStu[i] - 1);
    } else if (lostStu.includes(reserveStu[i] + 1)) {
      lostStu = lostStu.filter((v) => v !== reserveStu[i] + 1);
    }
  }

  return n - lostStu.length;
}
