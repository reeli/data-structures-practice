// 1. 一种基于「节点」的数据结构。如果我们把内存想象成一个个格子，那么每个节点会占用中两个格子，一个用于存储 data，另一个用于存储下一个格子的内存地址。

class NodeElement {
  data: any;
  nextNode: any;

  constructor(value: any) {
    this.data = value;
    this.nextNode = null;
  }
}

const node1 = new NodeElement("node1");
const node2 = new NodeElement("node2");
const node3 = new NodeElement("node3");

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = null;

class LinkedList {
  firstNode: any;

  constructor(firstNode: any) {
    this.firstNode = firstNode;
  }

  insertNodeAtIndex(index: number, value: any) {
    const newNode = new NodeElement(value);

    // 在前端插入
    if (index === 0) {
      newNode.nextNode = this.firstNode;
      this.firstNode = newNode;

      return this.firstNode;
    }

    let currentIdx = 0;
    let prevNode = this.firstNode;

    // 找到要待插入位置（index）的前一个节点
    while (currentIdx < index - 1) {
      prevNode = prevNode.nextNode;
      currentIdx += 1;
    }

    const tempNext = prevNode.nextNode;

    prevNode.nextNode = newNode;
    newNode.nextNode = tempNext;

    return this.firstNode;
  }

  deleteNodeAtIndex(index: number) {
    if (index === 0) {
      this.firstNode = this.firstNode.nextNode;
      return this.firstNode;
    }

    let currentIdx = 0;
    let prevNode = this.firstNode;

    // 找到要待插入位置（index）的前一个节点
    while (currentIdx < index - 1) {
      prevNode = prevNode.nextNode;
      currentIdx += 1;
    }

    if (!prevNode || !prevNode.nextNode) {
      return this.firstNode;
    }

    prevNode.nextNode = prevNode.nextNode.nextNode;
    return this.firstNode;
  }

  findNodeByIndex(index: number) {
    let currentIdx = 0;
    let currentNode = this.firstNode;

    while (currentIdx < index) {
      currentIdx += 1;
      if (!currentNode) {
        break;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  findNodeByValue(value: any, currentNode = this.firstNode) {
    if (currentNode.data === value) {
      return currentNode;
    }

    if (currentNode.nextNode === null) {
      return null;
    }

    return this.findNodeByValue(value, currentNode.nextNode);
  }
}

// LinkedList 就是一个指针，指向第一个元素，这样我们就能知道链表是从哪个结点开始的
const linkedList = new LinkedList(node1);

// console.log(linkedList.firstNode);
linkedList.findNodeByValue("node3");
linkedList.insertNodeAtIndex(2, "test1");
linkedList.findNodeByIndex(5);
// console.log(JSON.stringify(linkedList.insertNode(2, "test1"), null, 2));

console.log(linkedList.firstNode);
console.log(linkedList.deleteNodeAtIndex(4));

/** 结果：
 *
NodeElement {
  data: 'node1',
  next: NodeElement {
    data: 'node2',
    next: NodeElement { data: 'node3', next: null }
  }
}
**/
