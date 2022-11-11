function solution(num, k) {
    let Arr = Array.from(String(num))
    return Arr.includes(k.toString()) ? Arr.indexOf(k.toString())+1 : -1
}     