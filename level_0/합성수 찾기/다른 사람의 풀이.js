function solution(n) {
    let base = Array.from(Array(n), (v,i) => i+1)
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        base = base.filter(el => el%i != 0 || el <= i)
    }
    return n - base.length
}