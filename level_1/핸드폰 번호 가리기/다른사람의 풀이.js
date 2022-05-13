function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
function solution(phone_number) {
  return hide_numbers(phone_number);
}
