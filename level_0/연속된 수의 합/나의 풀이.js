function solution(num, total) {
    let answer = [];
    const n = Math.ceil(total/num);
    for(let i=0;i<num;i++){
       answer.push(n- Math.floor(num/2)+i) 
    }
    return answer;
}