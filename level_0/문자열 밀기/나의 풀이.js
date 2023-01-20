function solution(A, B) {
    const AA = A.split('');
    for(let i=0;i<[...A].length;i++){
        if(AA.join('') === B) return i;
        AA.unshift(AA[AA.length-1]);
        AA.pop();
    }
    return -1;
}