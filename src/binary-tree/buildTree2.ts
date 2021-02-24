// #106 从中序与后序遍历序列构造二叉树

import { TreeNode } from "./common/TreeNode";

/**
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 */

// 中序遍历为：左子结点 -> 根结点 -> 右子结点
// 后序遍历为：左子结点 -> 右子结点 -> 根结点

// 解题思路：通过后序遍历找出根结点，再根据根结点从中序遍历中找出左右子结点。注意：根据 rootNumber 在 list 中的 index 去拆分列表，而不是根据 rootNumber 的值去拆分。

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }
  const rootNumber = postorder[postorder.length - 1];
  const rootNumberIdx = inorder.indexOf(rootNumber);
  const rootNode = new TreeNode(rootNumber);
  const leftChildArr = inorder.slice(0, rootNumberIdx);
  const rightChildArr = inorder.slice(rootNumberIdx + 1);

  rootNode.left = buildTree(
    leftChildArr,
    findPostOrder(leftChildArr, postorder)
  );
  rootNode.right = buildTree(
    rightChildArr,
    findPostOrder(rightChildArr, postorder)
  );

  return rootNode;
}

const findPostOrder = (list: number[], postorder: number[]) => {
  if (list.length == 0) {
    return [];
  }
  return postorder.filter((n) => list.indexOf(n) > -1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
