function solution(polynomial) {
    let NumSum = 0;
    let XSum = 0;
    const arr = polynomial.split(" + ")
    arr.map((i) => {
        if(i.includes("x")){
            XSum += Number(i.split("x").join('') || 1);
        }else {
            NumSum += Number(i)
        }
    })
    if(XSum > 1){
        return NumSum > 0 ? `${XSum}x + ${NumSum}` : `${XSum}x`
    }else if(XSum === 1){
        return NumSum > 0 ? `x + ${NumSum}` : `x`
    }else {
        return `${NumSum}`
    }
}