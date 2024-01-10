function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}

function solution(n) {
  return n.toString(2).replace(/0/g, "").length;
}
