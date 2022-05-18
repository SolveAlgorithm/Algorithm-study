function solution(s) {
    return s.length === (4||6) && s.split('').every(e => e.charCodeAt() < 58) ? true : false;
}