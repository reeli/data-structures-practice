// #322 零钱兑换

// 解题思路：遍历 coins，分别用 amount 和 每个 coin 做差，取最后结果里面的最小值（负数除外），

// 遍历 [1, 2, 5]，分别和 4 做差，得到 4-1=3, 4-2=2, 4-5=-1，结果：[3,2,-1]，最后过滤掉负数，取 [3,2] 的最小值（即为下一次需要去凑的 amount 值2），并且总数 +1 （找到一个）
// 遍历 [1, 2, 5]，分别和 2 做差，得到 2-1=1, 2-2=0, 2-5=-3，结果：[1,0,-3]，最后过滤掉负数，取 [1,0] 的最小值 0（即为下一次需要去凑的 amount 值0）, 并且总数 +1 （找到一个）
// f(0)=0

function coinChange2(coins: number[], amount: number): number {
  function fn(i: number): number {
    if (i == 0) {
      return 0;
    }

    const temp: number[] = [];
    coins.forEach((cj) => {
      if (i - cj >= 0) {
        temp.push(fn(i - cj));
      }
    });

    // ?? min(f(4-1), f(4-2), f(3-1), f(3-2), f(2-1), f(1-1)) + 1
    return Math.min(...temp) + 1;
  }

  return fn(amount);
}

console.log(coinChange2([1, 2, 5], 4));
