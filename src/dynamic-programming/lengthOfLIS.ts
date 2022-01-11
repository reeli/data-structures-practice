// 300. 最长递增子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 解题思路：通过减少数组数量来将问题规模减小。f(n) 为数组中以第 n 个数结尾的最长上升子序列，每次减少一个 f(n-1), f(n-2)...f(1) 共 n-2 个子问题

// [10,9,2,5,3,7,101,18] -> fn(n) = f(7)

// [10,9,2,5,3,7,101] ->  [2,3,7,101] f(7-1)
// [10,9,2,5,3,7]     ->  [2,3,7]     f(6-1)
// [10,9,2,5,3]       ->  [2,3]
// [10,9,2,5]         ->  [2,5]
// [10,9,2]           ->  [2]        f(3-1)
// [10,9]             ->  [9]        f(2-1)
// [10]               ->  [10]       f(1)

//  f(n) = max(f(i)) + 1 (i<n a[i]<a[n])


function lengthOfLIS(nums: number[]): number {
  const fn = (i: number) => {
    if (i < 0) {
      return 0;
    }

    if (i == 0) {
      return 1;
    }

    const res: number[] = [];
    const others = nums.slice(0, i);

    for (let j = others.length -1; j >= 0; j--) {

      console.log(others,j, fn(j))


      res.push(fn(j))
    }

    if (res.length > 0) {
      const extra = (nums[i - 1] < nums[i] ? 1 : 0)
      return Math.max(...res) + extra
    }

    return 0;
  }

  //
  return fn(nums.length - 1)
}


console.log(lengthOfLIS([4,10,4,3,8,9]))
// [10,9,2,5,3,7,101, 18]

// f(i) = max(f(i -1)) + (lastNum > arr[lastNum - 1] ? 1 : 0)
