function solution(my_string) {
    return Array.from(my_string).filter((i)=> !isNaN(i)).reduce((a,b) => +a + +b);
}