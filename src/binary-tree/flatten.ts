// #114 二叉树展开为链表

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

const flatten = (root: TreeNode | null): void => {
  if (!root) {
    return;
  }

  // 1. 分别拉平左右子树, 形成 L1 和 L2 两条链
  flatten(root.left);
  flatten(root.right);

  // 2. 将左子树作为右子树，并将左子树置空
  const tempRight = root.right;
  root.right = root.left;
  root.left = null;

  // 3. 将原来的右结点拼接到当前结点末端的右子结点上

  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = tempRight;
};

const node1Left = new TreeNode(3);
const node1Right = new TreeNode(4);
const node1 = new TreeNode(2, node1Left, node1Right);

const node2Right = new TreeNode(6);

const node2 = new TreeNode(5, null, node2Right);

const root = new TreeNode(1, node1, node2);

flatten(root);

console.log(JSON.stringify(root, null, 2));
