function solution(arr) {
  return (
    arr.reduce((a, b) => {
      return a + b;
    }) / arr.length
  );
}
