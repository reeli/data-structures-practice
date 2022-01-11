// #322 零钱兑换

// fn(i) = Min( fn(n - coin) ) + 1

// 解题思路：遍历 coins，分别用 amount 和 每个 coin 做差，取最后结果里面的最小值（负数除外），

// 遍历 [1, 2, 5]，分别和 4 做差，得到 4-1=3, 4-2=2, 4-5=-1，结果：[3,2,-1]，最后过滤掉负数，取 [3,2] 的最小值（即为下一次需要去凑的 amount 值2），并且总数 +1 （找到一个）
// 遍历 [1, 2, 5]，分别和 2 做差，得到 2-1=1, 2-2=0, 2-5=-3，结果：[1,0,-3]，最后过滤掉负数，取 [1,0] 的最小值 0（即为下一次需要去凑的 amount 值0）, 并且总数 +1 （找到一个）
// f(0)=0

function coinChange(coins: number[], amount: number): number {
  const map = new Map();
  const fn = (i: number): number => {
    if(i==0){
      return 0
    }

    if(i<0){
      return -1;
    }

    const res: number[] = [];

    coins.forEach(coin => {
      const key = i -coin;
      if(map.has(key)){
        res.push(map.get(key))
      }else{
        map.set(key, fn(key))
        res.push(fn(key))
      }
    });

    const list = res.filter(v=> v>=0);

    if(list.length>0){
      // min(f(4-1), f(4-2), f(3-1), f(3-2), f(2-1), f(1-1)) + 1
      return Math.min(...list) + 1
    }

    return -1;
  }

  return fn(amount);
}

coinChange([1, 2, 5], 4)
coinChange([2], 3);
