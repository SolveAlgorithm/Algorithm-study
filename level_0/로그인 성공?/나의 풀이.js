function solution(id_pw, db) {
    let answer = 'fail';
    db.forEach((i) => {
        if(id_pw[0] === i[0] && id_pw[1] === i[1]){
           return answer = 'login'
        }else if(id_pw[0] === i[0]){
            answer = 'wrong pw'
        }
    })
    return answer;
}