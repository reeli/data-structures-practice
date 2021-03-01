// #509 斐波那契数

const fib = (n: number): number => {
  if (n < 1) {
    return 0;
  }

  if (n == 1 || n == 2) {
    return 1;
  }

  const dp = [];

  dp[1] = dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fib(4));
