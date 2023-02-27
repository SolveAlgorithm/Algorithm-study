function solution(a, b, n) {
    let answer = 0;
    let getCoke = 0;
    let coke = n;

    while (coke >= a) {
        getCoke = Math.floor(coke/a)*b;
        answer += getCoke;
        coke = coke % a + getCoke;
    }
    return answer;
}