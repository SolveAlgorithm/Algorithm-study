function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0;i<n;i++){
        let Line = (arr1[i] | arr2[i]).toString(2);
        Line = "0".repeat(n-Line.length) + Line;
        answer.push(Line.replaceAll("0"," ").replaceAll("1","#"));
    }
    return answer;
}