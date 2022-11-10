function solution(num_list) {
    var answer = num_list.filter(i => i%2 === 0).length
    return [ answer , num_list.length - answer ];
}