## Map 함수

callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용

```js
배열.map(callbackFunction(현재값, 현재값의 인덱스, 현재배열), thisArg)
```

- thisArg : callbackFunction 내에서 this로 사용될 값

ex
기존 배열에 값의 x2를 한 배열

방법1

```let numbers = [ 1,2,3,4,5];
let newNumbers = numbers.map(number =>number *2);
console.log(newNumbers);
```

방법2

```let numbers = [ 1,2,3,4,5];
let newNumbers = numbers.map(function(number){
  return number*2;
});
console.log(newNumbers);
```

result : [2, 4, 6, 8, 10, 12, 14, 16, 18]
