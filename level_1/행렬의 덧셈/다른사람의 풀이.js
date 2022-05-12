const matrixAddition = (matrix1, matrix2) =>
  matrix1.map((row, i) => row.map((v, j) => v + matrix2[i][j]));

function solution(arr1, arr2) {
  return matrixAddition(arr1, arr2);
}
