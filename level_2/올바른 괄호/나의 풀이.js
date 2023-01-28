function solution(s){
    let ctn = 0;
    if(s.length === 1 || s[0] === ")") return false;
    for(let i = 0;i<s.length;i++){
        if(s[i] == '('){
            ctn += 1;
        }else {
            ctn -= 1;
            if(ctn < 0) break;
        }
    }
    return ctn === 0;
}