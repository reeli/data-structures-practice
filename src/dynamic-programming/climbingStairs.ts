// #70 爬楼梯

/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。要爬到 n 阶楼梯，我们可以：
  1. 从 n-2 阶楼梯爬 2 阶
  2. 或者从 n-1 阶楼梯爬 1 阶
  3. 直到 n 等于0，则表示爬完了所有的楼梯
  4. f(n) = f(n-1) + f(n-2)
 */

// 假设爬到 n 阶楼梯有 f(n) 种方法
// 爬到一阶楼梯只有一种 1 中方法 f(1) = 1
// 当 f(0) 时意味着不需要再爬楼梯，此时正好爬完所有楼梯，应该计数（得到一种爬楼梯的方式）
// 因此，最终我们只需要计算有多少个 f(0)，即表示有多少种爬楼梯的方法

// f(4) = f(4-1) + f(4-2)
// f(3) = f(3-1) + f(3-2)
// f(2) = f(2-1) + f(2-2)
// f(1) = 1
// f(0) = 1

// 假设一共有 4 阶楼梯，我站在第 0 阶，那么我可以选择走 1 阶、或者走 2 阶，消耗 1/2 阶楼梯后，此时「剩下的情况」是还有 3 阶 或者 2 阶楼梯：
// 如果剩下 3 阶楼梯，此时我又可以选择走 1 阶或者走 2 阶
// 如果剩下 2 阶楼梯，此时我也可以选择走 1 阶或者走 2 阶
// 因此结果应该是: f(n-1) + f(n-2)

function climbStairs(n: number): number {
  const fn = (m: number, total: number = 0): number => {
    if (m < 0) {
      return total;
    }

    if (m === 0) {
      return total + 1;
    }

    return fn(m - 1, total) + fn(m - 2, total)
  }

  return fn(n)
}

// console.log(climbStairs(8));

function climbStairs1(n: number): number {
  const cache: { [key: number]: number } = {};

  const fn = (m: number): number => {
    if (m < 0) {
      return 0;
    }

    if (m == 0 || m == 1) {
      return 1;
    }

    if (cache[m]) {
      return cache[m]
    }

    cache[m - 1] = fn(m - 1)
    cache[m - 2] = fn(m - 2)

    return cache[m - 1] + cache[m - 2];
  }

  return fn(n)
}

console.log(climbStairs1(8));

