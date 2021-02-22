// # 116 填充每个节点的下一个右侧节点指针

class NodeElement {
  val: number;
  left: NodeElement | null;
  right: NodeElement | null;
  next: NodeElement | null;

  constructor(
    val?: number,
    left?: NodeElement,
    right?: NodeElement,
    next?: NodeElement
  ) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// 题目需要将「每一层二叉树的结点都连接起来」，可以拆分成更小的任务「将两个相邻的结点连接起来」

function connect(root: NodeElement | null): NodeElement | null {
  if (!root) {
    return null;
  }

  const connectTwoNode = (node1: NodeElement, node2: NodeElement | null) => {
    if (node1 == null) {
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

const node1Left = new NodeElement(4);
const node1Right = new NodeElement(5);
const node1 = new NodeElement(2, node1Left, node1Right);

const node2Left = new NodeElement(6);
const node2Right = new NodeElement(7);

const node2 = new NodeElement(3, node2Left, node2Right);

const root = new NodeElement(1, node1, node2);

console.log(connect(root));
