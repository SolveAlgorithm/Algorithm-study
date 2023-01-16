function solution(numbers) {
    let answer = numbers
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];      
    for(let i = 0; i < num.length; i++){
        answer = answer.split(num[i]).join(i)
    }
    return Number(answer)
}