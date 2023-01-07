function solution(array, n) {
    const arr = array.sort((next, prev) => next - prev);
    let answer = arr[0];
    arr.map((i) => {
       if(Math.abs(answer-n) > Math.abs(i-n)) {
           answer = i
       }
    })
    return answer;
}