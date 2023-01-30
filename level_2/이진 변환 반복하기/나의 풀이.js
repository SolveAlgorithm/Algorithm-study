function solution(s) {
    let ctn=0;
    let zeroCtn=0;
    while(s.length!==1){
        const sLen = s.length;
        s=s.split('0').join('');
        zeroCtn+=sLen-s.length;
        s=s.length.toString(2);
        ctn++;
    }
    return[ctn,zeroCtn];
}