function solution(s) {
    const arr = s.split(' ')
    const max = Math.max.apply(Math, arr) 
    const min = Math.min.apply(Math, arr) 
    return `${min} ${max}`
}