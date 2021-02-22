// #112 路径总和

import { TreeNode } from "./common/TreeNode";

// 如果 root 的 left 和 right 结点都不存在时，去判断 val 和 sum 的差值是否为 0
export const hasPathSum = (root: TreeNode | null, sum: number): boolean => {
  if (!root) {
    return false;
  }

  if (!root?.left && !root?.right) {
    return root.val - sum === 0;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

const node = new TreeNode(10);
console.log(hasPathSum(node, 10));
