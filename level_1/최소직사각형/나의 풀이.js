function solution(sizes) {
    let a = Math.max.apply(Math, sizes.map((i)=> i.sort((a,b)=>a-b)[0]));
    let b = Math.max.apply(Math, sizes.map((i)=> i.sort((a,b)=>a-b)[1]));
    return a*b;
}