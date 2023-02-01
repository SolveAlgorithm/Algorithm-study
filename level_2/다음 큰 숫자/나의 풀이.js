function solution(n) {
    let num = n.toString(2).split('0').join('').length;
    while(n<1000001){
        n++;
        let answer = n.toString(2).split('0').join('').length;
        if (num === answer) return n;
    }
}