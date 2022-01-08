// 15. 三数之和
// https://leetcode-cn.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const res: number[][] = [];
  const map = new Map();

  if (!nums || n < 3) {
    return res;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          const list = [nums[i], nums[j], nums[k]];
          if (map.has(list.join(","))) {
            continue;
          }
          res.push(list);
          map.set(list.join(","), 1);
        }
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]), 'xxx')
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// -4, -1, -1, 0, 1, 2,
