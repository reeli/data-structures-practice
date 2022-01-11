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
  const dp = new Array(nums.length);

  //  1,  2,  3,  4
  //  0,  1
  //



  // 0  [1]
  // 1  [1,1]
  for (let endIdx = 0; endIdx < nums.length; endIdx++) {
    dp[endIdx] = 1;

    // 0
    for (let from = 0; from < endIdx; from++) {

      // 2 > 1
      if(nums[endIdx]>nums[from]){
        dp[endIdx] = Math.max(dp[endIdx] /* dp[1] */, dp[from] /* dp[0] */ + 1)
      }
    }
  }

  return Math.max(...dp)
}

console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
// [10,9,2,5,3,7,101, 18]

// f(i) = max(f(i -1)) + (lastNum > arr[lastNum - 1] ? 1 : 0)
