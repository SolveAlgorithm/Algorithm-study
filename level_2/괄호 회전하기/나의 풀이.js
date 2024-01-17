function solution(s) {
  if (s.length % 2 === 1) return 0;
  const firstSigns = "({[";
  let isTrue = true;
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    const rotationSigns = s.slice(i) + s.slice(0, i);
    const stack = [];
    isTrue = true;

    for (let sign of rotationSigns) {
      if (firstSigns.includes(sign)) stack.push(sign);
      else {
        const leftSign = stack.pop();
        if (
          (sign === ")" && leftSign === "(") ||
          (sign === "}" && leftSign === "{") ||
          (sign === "]" && leftSign === "[")
        )
          continue;
        isTrue = false;
        break;
      }
    }
    if (isTrue) cnt++;
  }
  return cnt;
}
