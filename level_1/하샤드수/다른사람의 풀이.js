function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +b + +a));
}
//?
