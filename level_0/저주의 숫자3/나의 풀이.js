function solution(n) {
    let ctn = 0;
    for(let i = 1 ; i <= n ; i ++) {
        ctn++;
        while(ctn%3 === 0 || String(ctn).includes('3')) {
            ctn++;
        }
    }
    return ctn
}