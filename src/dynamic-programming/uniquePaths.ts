// #62 不同路径

// dp[i][j]: 当机器人走到 i,j 这个位置时，一共有 dp[i][j] 种路径
// dp[i][j]: dp[i-1][j] + dp[i][j-1]
// m=1  dp[i][1] = 1
// n=1  dp[1][i] = 1
// const dp = [[1,2], [2,3]]

export function uniquePaths(m: number, n: number): number {
  if (m < 0 || n < 0) {
    return 0;
  }
}
