function solution(s) {
    let sum = 0;
    let num = 0;
    const arr = s.split(' ');
    arr.map((i) => {
        if(i !== "Z"){
            num = Number(i)
            sum += num
        }else if(i === "Z") {
            sum -= num
        }
    })

    return sum;
}