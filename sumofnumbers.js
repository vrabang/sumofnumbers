
const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  const sum = _.reduce(nums, function (memo, num) {
    return memo + num;
  }, 0);
  return sum;
}

console.log(sumTheSimpleWay(testNums));
