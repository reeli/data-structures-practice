// 15. 三数之和
// https://leetcode-cn.com/problems/3sum/
// 用坐标原点来理解，for 循环是在改变坐标原点,l 和 r 分别在坐标原点的两侧。 l--0---r

function threeSum(nums: number[]): number[][] {
  const n = nums.length;

  if (!nums || n < 3) {
    return [];
  }

  const res: number[][] = [];
  const map = new Map();

  nums.sort((a, b) => a - b);

  let l = 0;
  let r = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      break;
    }

    // if (i > 0 && nums[i] === nums[i - 1]) {
    //   continue;
    // }

    l = i + 1;
    r = n - 1;

    while (l < r) {
      const total = nums[i] + nums[l] + nums[r];

      if (total == 0) {
        const k = [nums[i], nums[l], nums[r]].join(",");
        if(!map.has(k)){
          map.set(k, 1);
          res.push([nums[i], nums[l], nums[r]]);
        }

        //
        // while (l < r && nums[l] == nums[l + 1]) {
        //   l = l + 1;
        // }
        //
        // while (l < r && nums[r] == nums[r - 1]) {
        //   r = r - 1;
        // }

        l = l + 1
        r = r - 1
      } else if (total > 0) {
        r = r - 1;
      } else {
        l = l + 1;
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 1,1,1, 2, -1, -4]))
// console.log(threeSum([0, 0, 0, 0]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
