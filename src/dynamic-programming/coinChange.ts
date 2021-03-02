// #322 零钱兑换

// 1. 找出子问题 2. 得出子问题与原问题的关系
//
// [1, 2, 5] amount=11  -> f(11)
//                      -> f(6 = 11 - max(coins))     +1
//                      -> f(1 = 6 - max(coins)) +1
//                      -> 1 + 1
//
//
//
//     amount=10  -> f(9) + 1
//           amount=9   -> f(8) + 1
//           amount=8   -> f(7) + 1
//           amount=7   -> f(6) + 1   7-5, 2-2
//           amount=6   -> f(5) + 1   6-5, 1-1 -> 2
//           amount=5   -> f(4) + 1   5-5-> 0
//           amount=4   -> f(3) + 1   4-2, 4-2 -> 2
//           amount=3   -> f(2) + 1   3-2, 1-1  -> 2
//           amount=2   -> 1  -> f(2)    2-2  -> 1

// 初始值，不符合上面的公式
//           amount=1   -> 1  -> 1=1
//           amount=0   -> 0
//           amount≤-1  -> -1

// 1. 定义 f(n) 的含义：假设凑成总金额 n 所需要的最少硬币个数为 f(n)
// 2. 找出子问题与原问题的关系，并得出关系式：f(n) = f(n-coin) (n>coin) 当 n==0 时，得到最后结果
// 3. 找出初始条件

// 11-1 11-2 11-5

function coinChange(coins: number[], amount: number): number | never {
  // 求凑成总金额 n 所需要的硬币个数
  function fn(n: number): number {
    const maxCoin = Math.max(...coins);
    const remain = n - maxCoin;

    if (remain == 0) {
      return 1;
    }

    if (remain > 0) {
      return fn(remain) + 1;
    }

    // 小于0，需要从遍历剩余的 coins，去查找是否能匹配面值为 n 的硬币，
    // remainCoins.length==0 表示 coins 已经全部查找完毕，此时如果还没找到，则报错
    // n - max(remainCoins) == 0 -> 找到, 则 +1
    // n - max(remainCoins) >0  -> +1 继查找凑够剩余的钱所需要的硬币数量（跟前面的步骤类似），直到 remainCoins.length==0
    // n - max(remainCoins) < 0 -> 从剩余的 coins 中去掉最大面额的硬币，继续查找，直到 remainCoins.length==0

    let remainCoins = coins.filter((v) => v != maxCoin);

    while (remainCoins.length > 0) {
      const max = Math.max(...remainCoins);
      if (n - max === 0) {
        return 1;
      }
      if (n - max > 0) {
        return fn(n - max) + 1;
      }

      remainCoins = remainCoins.filter((v) => v !== max);
    }

    throw new Error("not match");
  }

  return fn(amount);
}

console.log(coinChange([1, 2, 5], 11));
