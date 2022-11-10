function solution(n) {
    return String(n).split('').reduce((acc, cur) =>  acc + Nmber(cur) , 0)
}