function solution(price, money, count) {
    let answer = 0;
    let pri = price;
    for(let i=0;i<count;i++){
        answer += pri;
        pri+=price;
    }
    return answer - money > 0 ? answer - money : 0
}