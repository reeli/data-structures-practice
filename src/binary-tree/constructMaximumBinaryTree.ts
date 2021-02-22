// #654 最大二叉树

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  // 如果 nums 为空， 返回 null
  // 1. find max number
  // 2. 以这个数字创建一个 tree mode
  // 3. treeNode.left = constructMaximumBinaryTree_654(leftArr)
  // 4. treeNode.right = constructMaximumBinaryTree_654(rightArr)

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
