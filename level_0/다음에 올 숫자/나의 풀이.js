function solution(common) {
    let n = common[1]-common[0];
    let r = common[1]/common[0];
    if((common[0]+common[2])/2 === common[1]){
        return common[common.length-1] + n;
    }else {
        return common[common.length-1] * r;
    }
}