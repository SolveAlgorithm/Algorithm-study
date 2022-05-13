## Slice 함수

**원본 배열은 유지**하고 begin부터 end까지(end 미포함)의 새로운 배열 객체를 반환할때 사용

```js
배열.slice(시작, 엔드);
```

- 사용예시

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice());
// expected : [1, 2, 3, 4, 5];

console.log(numbers.slice(1));
// expected : [2, 3, 4, 5];

console.log(numbers.slice(-2)); // 마지막요소부터 마지막에서 두번째 요소까지 추출
// expected : [4, 5];

console.log(numbers.slice(99)); // 배열의 길이보다 클 경우 빈 배열
// expected : [];

console.log(numbers.slice(1, 4)); // index 1부터 index 4까지(index 4제외) 추출
// expected : [2, 3, 4];

console.log(numbers.slice(2, -1)); // index 2부터 마지막에서 첫번째 요소까지(마지막에서 첫번째 요소 제외) 추출
// expected : [3, 4];

console.log(numbers.slice(2, 99)); // index 2부터 마지막에서 요소까지 추출(end가 배열의 길이보다 큼)
// expected : [3, 4, 5];
```
