function solution(numbers) {
    const [one, two] = numbers.sort((a, b) => b - a);
return one * two;
}

// function solution(numbers) {
//     const [one, two] = numbers.sort((a, b) => b - a);
//     const [three, four] = numbers.sort((a, b) => a - b);
//     return (one * two) >= (three*four) ? one * two : three*four
// }