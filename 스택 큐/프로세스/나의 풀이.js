// 처음(반복문 돌리려다 시간초과, 문제이해를 잘못함)
function solution(priorities, location) {
  const indexArr = Array.from(
    Array(priorities.length),
    (_, index) => index
  ).map((i) => i.toString());
  const arr = [];
  const iArr = [];
  let Spri = priorities[0];
  let Sidx = indexArr[0];

  for (let i = 1; i < priorities.length; i++) {
    for (let j = 0; i < priorities.length; j++) {
      if (priorities[j] == i.toString()) {
        Spri = priorities[j];
        Sidx = indexArr[j];
        while (priorities[j] !== priorities[j + 1]) {
          Spri += priorities[j + 1];
          Sidx += j + 1;
        }
        arr.unshift(Spri);
        iArr.unshift(Sidx);
      }
    }
  }
}

// 나중
function solution(priorities, location) {
  const arr = priorities.map((item, idx) => ({ item, idx }));
  let cnt = 0;
  while (arr.length) {
    const queue = arr.shift();
    if (arr.some((element) => element.item > queue.item)) {
      arr.push(queue);
    } else {
      cnt += 1;
      if (location === queue.idx) return cnt;
    }
  }
}
