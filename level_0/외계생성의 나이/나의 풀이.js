function solution(age) {
    return Array.from(String(age)).map(num => String.fromCharCode('a'.charCodeAt(0) + +num)).join('');
}