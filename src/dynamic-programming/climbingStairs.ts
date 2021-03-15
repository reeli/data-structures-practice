// #70 爬楼梯

/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。要爬到 n 阶楼梯，我们可以：
  1. 从 n-2 阶楼梯爬 2 阶
  2. 或者从 n-1 阶楼梯爬 1 阶
 */

// 假设爬到 n 阶楼梯有 f(n) 种方法
// 爬到一阶楼梯只有一种 1 中方法 f(1) = 1
// 当 f(0) 时意味着不需要再爬楼梯，此时正好爬完所有楼梯，应该计数（得到一种爬楼梯的方式）
// 因此，最终我们只需要计算有多少个 f(0)，即表示有多少种爬楼梯的方法

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

    const fn = (m: number, total: number = 0): number => {
        if (m < 0) {
            return total;
        }

        if (m === 0) {
            return total + 1;
        }

        if (cache[m]) {
            return cache[m]
        }

        cache[m - 1] = fn(m - 1, total)
        cache[m - 2] = fn(m - 2, total)

        return cache[m - 1] + cache[m - 2];
    }

    return fn(n)
}

console.log(climbStairs1(8));

