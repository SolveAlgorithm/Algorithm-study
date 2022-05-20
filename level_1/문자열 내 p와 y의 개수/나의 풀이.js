function solution(s) {
  s = s.toUpperCase().split("");
  let plength = s.filter((element) => "P" === element).length;
  let slength = s.filter((n) => "Y" === n).length;
  return plength === slength;
}
