function solution(seoul) {
  let numver = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      number = i;
    }
  }
  return `김서방은 ${number}에 있다`;
}
