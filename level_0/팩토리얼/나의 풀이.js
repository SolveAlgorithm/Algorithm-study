function solution(n) {
    var fac = 1;
    let answer = 1;
    for(let i=1; i<=10; i++){
        if(Math.abs(fac-n) > Math.abs(fac*i-n) && fac*i <= n){
            answer = i;
        }
        fac *= i;
    }
    return answer;
}
