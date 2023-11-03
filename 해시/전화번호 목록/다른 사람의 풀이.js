function solution(phoneBook) {
  var answer = true;
  phoneBook.map((value, index) => {
    phoneBook.map((value2, index2) => {
      if (value.indexOf(value2) == 0 && index != index2) {
        answer = false;
      }
    });
  });
  return answer;
}
