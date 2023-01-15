function solution(my_string) {
    return Array.from(my_string).filter((i)=> !isNaN(i)).reduce((a,b) => +a + +b);
}

function solution(my_string) {
    let answer = 0;
    let arr = [];
    [...my_string].map((i) => {
        if(!isNaN(i)){
            arr.push(i)
        }else {
            arr.push(" ")
        }
    })
    arr.join('').split(' ').map((i) => {
        if(!isNaN(i)){
        answer+= Number(i)
        }
    })
    return answer;
}