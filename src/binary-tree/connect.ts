// # 116 填充每个节点的下一个右侧节点指针

class TreeNodeElement {
  val: number;
  left: TreeNodeElement | null;
  right: TreeNodeElement | null;
  next: TreeNodeElement | null;

  constructor(
    val?: number,
    left?: TreeNodeElement,
    right?: TreeNodeElement,
    next?: TreeNodeElement
  ) {
    this.val = val == undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// 题目需要将「每一层二叉树的结点都连接起来」，可以拆分成更小的任务「将两个相邻的结点连接起来」

function connect(root: TreeNodeElement | null): TreeNodeElement | null {
  if (!root) {
    return null;
  }

  const connectTwoNode = (
    node1: TreeNodeElement | null,
    node2: TreeNodeElement | null
  ) => {
    if (node1 == null || node2 === null) {
      return;
    }

    node1.next = node2 || null;

    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    connectTwoNode(node1.right, node2.left);
  };

  connectTwoNode(root.left, root.right);

  return root;
}

const node1Left = new TreeNodeElement(4);
const node1Right = new TreeNodeElement(5);
const nodeA = new TreeNodeElement(2, node1Left, node1Right);

const node2Left = new TreeNodeElement(6);
const node2Right = new TreeNodeElement(7);

const nodeB = new TreeNodeElement(3, node2Left, node2Right);

const root = new TreeNodeElement(1, nodeA, nodeB);

console.log(connect(root));
