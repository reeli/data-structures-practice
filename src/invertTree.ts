class TreeNode {
  data: any;
  left: any;
  right: any;

  constructor(data: number, left?: any, right?: any) {
    this.data = data;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const node1Left = new TreeNode(1);
const node1Right = new TreeNode(3);
const node1 = new TreeNode(2, node1Left, node1Right);

const node2Left = new TreeNode(6);
const node2Right = new TreeNode(9);

const node2 = new TreeNode(7, node2Left, node2Right);

const root = new TreeNode(4, node1, node2);

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const temp = root.right;

  root.right = invertTree(root.left);
  root.left = invertTree(temp);

  return root;
}

console.log(invertTree(root));