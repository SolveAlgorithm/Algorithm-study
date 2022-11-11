function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}

// function solution(my_string) {
//     return my_string.toLowerCase().split('').sort().join('');
// }