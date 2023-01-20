function solution(absolutes, signs) {
    return absolutes.reduce((acc,cur,index) => signs[index] ? acc+=cur*1 : acc+=(cur*-1),0)
}