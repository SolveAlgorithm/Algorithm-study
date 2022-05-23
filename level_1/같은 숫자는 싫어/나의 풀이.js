function solution(arr) {
  let answer = arr.filter((val, index) => val != arr[index + 1]);
  return answer;
}
