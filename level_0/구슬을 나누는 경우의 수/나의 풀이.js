function solution(balls, share) {
    return fac(balls) / ((fac(balls - share)) * fac(share))
}

function fac(num){
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}