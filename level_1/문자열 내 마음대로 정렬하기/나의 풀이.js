function solution(strings, n) {
    return strings.sort().sort((next, prev) => next.split('')[n].charCodeAt() - prev.split('')[n].charCodeAt())
}