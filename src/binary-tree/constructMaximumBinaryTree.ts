// #654 最大二叉树

import { TreeNode } from "./common/TreeNode";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  // 如果 nums 为空， 返回 null
  // 1. find max number
  // 2. 以这个数字创建一个 tree mode
  // 3. treeNode.left = constructMaximumBinaryTree(leftArr)
  // 4. treeNode.right = constructMaximumBinaryTree(rightArr)

  if (nums.length === 0) {
    return null;
  }

  const maxNumber = Math.max(...nums);
  const maxNumberIdx = nums.indexOf(maxNumber);

  const leftArr = nums.slice(0, maxNumberIdx);
  const rightArr = nums.slice(maxNumberIdx + 1);

  const rootNode = new TreeNode(maxNumber);

  rootNode.left = constructMaximumBinaryTree(leftArr);
  rootNode.right = constructMaximumBinaryTree(rightArr);

  return rootNode;
}

console.log(
  JSON.stringify(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]), null, 2)
);
