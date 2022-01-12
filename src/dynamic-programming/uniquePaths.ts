// #62 不同路径

// dp[i][j]: 当机器人走到 i,j 这个位置时，一共有 dp[i][j] 种路径
// dp[i][j]: dp[i-1][j] + dp[i][j-1]
// m=1  dp[i][1] = 1
// n=1  dp[1][i] = 1
// const dp = [[1,2], [2,3]]

// f(1, 1) 表示最终走回原点

export function uniquePaths(m: number, n: number): number {
  const fn = (y: number, x: number, total: number = 0): number => {
    if (y <= 0 || x <= 0) {
      return total;
    }

    return fn(y - 1, x, total) + fn(y, x - 1, total);
  };

  return fn(m, n);
}

// console.log(uniquePaths(3, 3))

export function uniquePaths1(m: number, n: number): number {
  const cache: { [key: string]: number } = {};

  const fn = (y: number, x: number): number => {
    if (y < 0 || x < 0) {
      return 0;
    }

    if (y == 0 || x == 0) {
      return 1;
    }

    const a1 = `${y - 1},${x}`;
    const a2 = `${y},${x - 1}`;

    cache[a1] = cache[a1] || fn(y - 1, x);
    cache[a2] = cache[a2] || fn(y, x - 1);

    return cache[a1] + cache[a2];
  };

  return fn(m - 1, n - 1);
}

console.log(uniquePaths1(3, 3));
