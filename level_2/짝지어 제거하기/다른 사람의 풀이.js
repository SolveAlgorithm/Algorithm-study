function solution(s){
    if(s.length % 2 != 0) return 0;
    var stringToArray = s.split('');
    var res = [];

    for (var val of stringToArray){
        if( val === res[res.length -1]){
            res.pop() 
        } else { res.push(val)}
    } 
    return res.length === 0 ? 1 : 0 ;
}
