function solution(s){
    if(s.length % 2 != 0) return 0
    let arr = [s[0]];
    for (let i=1; i<s.length; i+=1){
        arr.push(s[i]);
        if (arr.slice(-2, -1)[0] == s[i]){
            arr.pop();
            arr.pop();
        }
    }
    if (arr.length > 0) return 0;
    return 1;
}