## Sort 함수

배열의 요소들을 정리하기 위해 사용

sort 함수의 핵심은 비교함수를 작성하는 것이고, 비교함수에서 next 와 prev 가 들어오고 무언가 바꾸고 싶을 때 0보다 작은숫자를 리턴하는 것
ex

```js
let numbers = [1, 10, 2, 20, 3, 30];
```

- 오름차순

```js
numbers.sort((next, prev) => next - prev);
```

result : [1,2,3,10,20,30]

- 내림차순

```js
numbers.sort((next, prev) => prev - next);
```

result : [30,20,10,3,2,1]
