## Reduce 함수

데이터를 하나의 테이트로 응축(reduce)할 때 사용

```js
배열.reduce((누적값, 현잿값, 인덱스, 요소) => {
  return 결과;
}, 초깃값);
```

- reduce 특징
  이전값이 아닌 누적값을 이용

ex

```js
let temp = [1, 2, 3];
// 누적값, 현재값, 인덱스
result = temp.reduce((acc, cur, index) => {
  console.log(acc, cur, index);
  return acc + cur;
}, 0);

// 0 1 0
// 1 2 1
// 3 3 2
result; // 6
```
