function solution(clothes) {
  var answer = 1;
  let map = new Map();
  for (i = 0; i < clothes.length; i++) {
    if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  }
  [...map].map((i) => (answer *= i[1] + 1));
  return answer - 1;
}
