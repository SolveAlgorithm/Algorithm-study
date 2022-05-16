function solution(s, n) {
  return s
    .split("")
    .map((i) => {
      if (i === " ") return " ";
      const isUpletter = i.toUpperCase() === i;
      //i 가 대문자면 true 소문자면 false
      let code = i.charCodeAt() + n;
      //영어알파벳를 아스키코드로바꾸기
      if ((isUpletter && code > 90) || (!isUpletter && code > 122)) {
        //i 가 대문자인데 90 보다 클경우하고 소문자인데 122 보다 크다면 26빼기 (z 다음을 a로 가게 하기위해서)
        code -= 26;
      }
      return String.fromCharCode(code);
      //다시 알파벳으로 바꾸기
    })
    .join("");
}
