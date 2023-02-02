function solution(n) {
    let nums = [];
     for (let i = 1; i <= n; i++) {
       if (i % 2 === 1) nums = [...nums, i];
     }
     return nums;
}