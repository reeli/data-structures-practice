// 1. 两数之和
// https://leetcode-cn.com/problems/two-sum/

/*
// 方案一：暴力破解
function twoSum(nums: number[], target: number): number[] {
  let n = nums.length;
  let res:number[] = []

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if(nums[i]+nums[j]===target){
        res = [i, j];
      }
    }
  }

  return res;
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3,3], 6))
*/

/*
方案二：利用 map 存储
查找 target - 当前值 是否已经存在于 map 中，如果已经存在，则找到
如果不存在，则把当前值存储起来，继续查找
*/
function twoSum(nums: number[], target: number): number[] {
  let n = nums.length;
  let res: number[] = [];
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const t = target - nums[i];
    if (map.has(t)) {
      return res = [map.get(t),i];
    }

    map.set(nums[i], i)
  }

  return res;
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3,3], 6))
console.log(twoSum([1,3,4,2], 6))
