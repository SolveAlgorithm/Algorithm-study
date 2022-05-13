function solution(n, m) {
  let r;
  for (let nm = n * m; (r = n % m); n = m, m = r) {
    console.log(nm, r, n, m);
  }
  return [m, nb / m];
}
solution(2, 6);

//true/false 조건을 (r=a%b) 로 판별했다 0이 나오면 for문이 종료되게 된다.
//ex
// a= 3 b=4
// ab=12 ; r=3; a=4,b=3
// ab=12; r=1; a=3. b=1;
// ab=3; r=0;
