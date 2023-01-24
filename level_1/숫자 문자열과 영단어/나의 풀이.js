function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six","seven", "eight", "nine"];
    let answer = s;
    for(let i in arr){
        answer = answer.replaceAll(arr[i],i)
    }
    return Number(answer)
}