class NodeElement {
  data: any;
  nextNode: any;
  prevNode: any;

  constructor(value: any) {
    this.data = value;
    this.prevNode = null;
    this.nextNode = null;
  }
}

const node1 = new NodeElement("node1");
const node2 = new NodeElement("node2");
const node3 = new NodeElement("node3");

node1.prevNode = null;
node1.nextNode = node2;

node2.prevNode = node1;
node2.nextNode = node3;

node3.prevNode = node2;
node3.nextNode = null;

class DoubleLinkedList {
  firstNode: any;
  lastNode: any;

  constructor(firstNode: any, lastNode: any) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd() {}

  removeFromFront() {}
}

const doubleLinkedList = new DoubleLinkedList(node1, node3);

console.log(doubleLinkedList, "doubleLinkedList");
