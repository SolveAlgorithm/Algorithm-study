function solution(nums) {
  let set = new Set(nums);
  const setNums = set.size;
  const nimNums = nums.length / 2;
  if (nimNums < setNums) {
    return nimNums;
  } else {
    return setNums;
  }
}
