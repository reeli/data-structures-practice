// #105 从前序与中序遍历序列构造二叉树
import { TreeNode } from "./common/TreeNode";

/**
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 */

// 前端遍历为：根结点 -> 左子结点 -> 右子结点
// 中序遍历为：左子结点 -> 根结点 -> 右子结点

// 从前序遍历的 list 中可以看出：第一个元素为 root 节点 (3)
// 从中序遍历的 list 中可以看出：列表中 root 元素左边的是它的左子结点，root 元素右边的是它的右子结点 ([9] 为左子结点，[15, 20, 7] 为右子结点)
// 然后重复此步骤：先从前序遍历找出根结点，再从中序遍历找左右子结点。[15, 20, 7] 对应的前序遍历数组为 [20, 15, 7]，其中 20 为根节点，再查看中序遍历则得出其左右子结点分别为 15 和 7

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const rootNode = new TreeNode(preorder[0]);
  const rootIdx = inorder.indexOf(preorder[0]);
  const leftList = inorder.slice(0, rootIdx);
  const rightList = inorder.slice(rootIdx + 1);

  const build = (preorderList: number[], inorderList: number[]) => {
    const root = new TreeNode(preorderList[0]);
    const rootIdx = inorderList.indexOf(preorderList[0]);
    const leftList = inorderList.slice(0, rootIdx);
    const rightList = inorderList.slice(rootIdx + 1);

    if (leftList.length === 1) {
      root.left = new TreeNode(leftList[0]);
    }

    if (rightList.length === 1) {
      root.right = new TreeNode(rightList[0]);
    }

    return root;
  };

  rootNode.left = buildTree(
    findMatchListInPreOrder(preorder, leftList),
    leftList
  );
  rootNode.right = buildTree(
    findMatchListInPreOrder(preorder, rightList),
    rightList
  );

  return rootNode;
}

const findMatchListInPreOrder = (list: number[], matchList: number[]) => {
  if (matchList.length === 1) {
    return matchList;
  }

  return list.filter((n) => matchList.indexOf(n) > -1);
};

// console.log(findMatchListInPreOrder([3, 9, 20, 15, 7], [15, 20, 7]));

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
