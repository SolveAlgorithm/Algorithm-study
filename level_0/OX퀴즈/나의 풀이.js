function solution(quiz) {
    let answer = [];
    quiz.forEach((item) => {
        const quizItem = item.split(" ");
        const A = Number(quizItem[0]);
        const B = Number(quizItem[2]);
        const result = Number(quizItem[4]);
        let calc = 0;
        quizItem[1] === "+" ? calc = A + B :  calc = A - B;
        calc === result ? answer.push("O") : answer.push("X");
    })
    
    return answer;
}