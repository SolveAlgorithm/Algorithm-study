function solution(s) {
    let answer = [];
    let sArr = s.split("");
    sArr.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            answer.push(item);
        }
    })

    return answer.sort().join("");
}