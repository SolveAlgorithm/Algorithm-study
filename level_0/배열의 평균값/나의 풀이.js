function solution(numbers) {
    return numbers.reduce((cur , item) => {return cur + item } , 0) /numbers.length;
}