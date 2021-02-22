// #112 路径总和

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right == undefined ? null : right;
  }
}

export const hasPathSum = (root: TreeNode, sum: number) => {
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
