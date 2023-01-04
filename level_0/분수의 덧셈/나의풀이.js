// 정답 배열의 분자 부분 = denum1 * num2 + denum2 * num1
// 정답 배열의 분모 부분 = num1 * num2
function solution(denum1, num1, denum2, num2) {
    let n1 = denum1 * num2 + denum2 * num1;
    let n2 = num1 * num2;
    let numMin = 0;
    for(let i=0; i<n1+n2; i++){
        if(n1%i === 0 && n2%i === 0)
        numMin = i;
    }
    return [n1/numMin , n2/numMin]
}