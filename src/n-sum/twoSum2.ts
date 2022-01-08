// 167. 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
// 缩减空间：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/yi-zhang-tu-gao-su-ni-on-de-shuang-zhi-zhen-jie-fa/

function twoSum2(numbers: number[], target: number): number[] {
  const dict: { [key: string]: number } = {};
  let res: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    const a = target - numbers[i];
    const t = dict[a];

    if (t !== undefined && t !== null) {
      res = [t+1, i+1];
      break;
    }


    dict[numbers[i]] = i;
  }

  return res;
}

console.log(twoSum2([2, 7, 11, 15], 9))
console.log(twoSum2([-1,0], -1))
