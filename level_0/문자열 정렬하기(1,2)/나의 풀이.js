function solution(my_string) {
    return Array.from(my_string).filter(i => !isNaN(i)).map(i => +i).sort((n,p) => n - p)
}

// function solution(my_string) {
//     return Array.from(my_string).map(i => i.toLowerCase()).sort().join('');
// }