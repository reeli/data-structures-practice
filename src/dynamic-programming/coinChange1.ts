// #322 零钱兑换

const sortNumbers = (nums: number[]) => nums.sort((a, b) => b - a);

function coinChange1(coins: number[], amount: number): number | never {
  const orderedCoins = sortNumbers(coins);

  function fn(n: number): number | never {
    for (let i = 0; i < orderedCoins.length; i++) {
      const cj = orderedCoins[i];
      if (n - cj == 0) {
        return 1;
      }
      if (n - cj > 0) {
        return fn(n - cj) + 1;
      }
      // <0 继续循环，i+1, 和 orderedCoins[i+1]（由于排序，面额仅次于最大值） 进行对比
    }

    throw new Error("something went wrong");
  }

  return fn(amount);
}

console.log(coinChange1([1, 2, 5], 11));
