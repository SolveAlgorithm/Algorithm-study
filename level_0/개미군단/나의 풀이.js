function solution(hp) {
    let 오나머지 =  Math.floor(hp/5)
    let 오몫 = Math.floor(hp%5)
    let 삼나머지 =  Math.floor(오몫/3)
    let 삼몫 = Math.floor(오몫%3)
    return 오나머지 + 삼나머지 + 삼몫;
}