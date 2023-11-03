function solution(phone_book) {
  let answer = true;
  phone_book.sort();
  for (i = 0; i < phone_book.length - 1; i++) {
    const nextNum = phone_book[i + 1].substr(0, phone_book[i].length);
    if (phone_book[i] === nextNum) {
      return false;
    }
  }
  return true;
}
