## Splice 함수

배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 **배열의 내용을 변경**할때사용

```js
[배열명].splice(시작, 엔드);
```

- slice, splice 차이점
  splice는 기존 배열을 변경, slice는 원본 배열은 변경되지 않고, 새로운 배열 객체를 반환

  ex

  ```js
  let array = ["one", "two", "three", "four", "five"];
  array.slice(0, 3);
  console.log(array);
  //slice메서드는 원본배열이 변경되지 않음
  //결과 : ['one', 'two', 'three', 'four', 'five']
  array.splice(0, 3);
  console.log(array);
  //splice메서드는 원본배열이 변경됨
  //결과 : ['four', 'five']
  ```
