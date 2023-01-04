function solution(emergency) {
    const sortArray = [...emergency].sort((a,b) => b-a)
    const answer = emergency.map((a) => sortArray.indexOf(a)+1)
    return answer
}