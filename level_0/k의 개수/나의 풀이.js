function solution(i, j, k) {
    var answer = 0;
    for(let n=i; n<=j; n++){
        [...String(n)].map((item) => {
            if(item === String(k)){
                answer += 1;    
            }
        })
    }
    return answer;
}