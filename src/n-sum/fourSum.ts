function fourSum(nums: number[], target: number): number[][] {
  if (!nums || nums.length < 4) {
    return [];
  }

  // [-1, -4, 0]
  // -4 -1,0
  const res: number[][] = []
  nums.sort((a, b) => a - b);

  const map = new Map();

  const n = nums.length;
  let l = 0;
  let r = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      l = j + 1;
      r = n - 1;

      while (l < r) {
        const total = nums[i] + nums[j] + nums[l] + nums[r];
        if (total === target) {
          const list = [nums[i], nums[j], nums[l], nums[r]];
          const hash = list.join(",");

          if(!map.has(hash)){
            res.push(list);
            map.set(hash, true)
          }

          l = l + 1
          r = r - 1;
        } else if (total > target) {
          r = r - 1
        } else {
          l = l + 1;
        }
      }
    }
  }

  return res;
}


// console.log(fourSum([1, 0, -1, 0, -2, 2], 0), 'xxx');
console.log(fourSum( [2,2,2,2,2], 8), 'xxx');
