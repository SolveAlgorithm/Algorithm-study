function solution(n) {
    return Array.from({length:n}, (_,i) => i +1).filter(i => n%i === 0)
}