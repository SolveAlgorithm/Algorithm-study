function solution(x) {
  let n = x;
  let s = 0;
  do {
    s += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);
  return n % s == 0 ? true : false;
}
