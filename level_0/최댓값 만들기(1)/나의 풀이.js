function solution(numbers) {
    const [one, two] = numbers.sort((a, b) => b - a);
return one * two;
}