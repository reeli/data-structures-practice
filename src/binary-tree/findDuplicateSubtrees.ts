// #652 寻找重复的子树

import { TreeNode } from "./common/TreeNode";

// 根据根节点，找出自己的左右节点，判断

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  if (!root) {
    return [];
  }

  const res: Array<TreeNode | null> = [];
  const treeMap: { [key: string]: number } = {};

  const lookup = (node: TreeNode | null): string => {
    if (!node) {
      return `null`;
    }

    const uid = [node.val, lookup(node?.left), lookup(node.right)].join(",");

    treeMap[uid] = (treeMap[uid] || 0) + 1;

    if (treeMap[uid] == 2) {
      res.push(node);
    }

    return uid;
  };

  lookup(root);
  return res;
}

// 解题思路：序列化节点

// 以 1 为根节点的子树： 1-2-4, 1-3-2-4, 1-3-4

// 以 2 为根节点的子树： 2-4
// 以 4 为根节点的子树： 4

// 以 3 为根节点的子树：3-2-4, 3-4
// 以 2 为根节点的子树 2-4
// 以 4 为根节点的子树 4

const run = () => {
  const node1Left = new TreeNode(4);

  const node2Left = new TreeNode(2, new TreeNode(4));
  const node2Right = new TreeNode(4);

  const nodeA = new TreeNode(2, node1Left);
  const nodeB = new TreeNode(3, node2Left, node2Right);

  const root = new TreeNode(1, nodeA, nodeB);

  console.log(findDuplicateSubtrees(root), "=====");
};

run();
