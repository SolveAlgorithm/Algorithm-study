function solution(s) {
  if (s.length % 2 === 1) return 0;

  let answer = 0;
  const mapping = { "}": "{", "]": "[", ")": "(" };

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const rotate = s.slice(i) + s.slice(0, i);
    let flag = true;

    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{")
        stack.push(rotate[j]);
      else {
        const last = stack.pop();
        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    s = s.slice(1, s.length) + s[0];

    let string = s;

    for (let j = 0; j < Math.floor(s.length / 2); j++) {
      string = string.replace(/([\[][\]]|[\{][\}]|[\(][\)])+/g, "");

      if (!string) break;
    }

    answer += !string ? 1 : 0;
  }

  return answer;
}
