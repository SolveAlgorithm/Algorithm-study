function solution(name, yearning, photo) {
  const nameYearningObj = {};
  name.map((i, idx) => {
    nameYearningObj[i] = yearning[idx];
  });
  return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (nameYearningObj[cur] || 0), 0)
  );
}
