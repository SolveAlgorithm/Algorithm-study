## Sort 함수

배열의 요소들을 정리하기 위해 사용

sort 함수의 핵심은 비교함수를 작성하는 것이고, 비교함수에서 a(next)와 b(prev)가 들어오고 무언가 바꾸고 싶을 때 -1을 리턴하는 것
ex

```let numbers = [1,10,2,20,3,30];
//숫자오름차순
    n.sort((next, prev) => next-prev);

//숫자내림차순
    n.sort((next, prev) => prev-next);
```
