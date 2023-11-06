// 처음(실패)
function solution(numbers) {
  var answer = "";
  const MAXNUMBER = numbers.reduce((a, b) => (a > b ? a : b)).toString().length;
  let sNumbers = numbers.map((i) => i.toString());
  sNumbers.sort((n, p) => p.slice(0, 1) - n.slice(0, 1));
  for (i = 1; i <= MAXNUMBER; i++) {
    sNumbers.sort((n, p) => {
      if (p.slice(i, i + 1)) {
        return (p.slice(i, i + 1) ?? -1) - (n.slice(i, i + 1) ?? -1);
      }
    });
    sNumbers.sort((n, p) => {
      if (
        n.slice(i, i + 1) > p.slice(i - 1, i) &&
        n.slice(i - 1, i) === p.slice(i - 1, i)
      ) {
        return (p.slice(i, i + 1) ?? -1) - (n.slice(i - 1, i) ?? -1);
      }
    });
  }

  return `${Number(sNumbers.join("").toString())}`;
}

// 나중
function solution(numbers) {
  let sNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));
  return sNumbers[0] === "0" ? "0" : sNumbers.join("");
}
