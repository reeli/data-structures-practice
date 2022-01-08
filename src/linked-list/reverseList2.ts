import {ListNode} from "./common/ListNode";

// 利用 prev, current 双指针
function reverseList(head: ListNode): ListNode {
  let pre = null;
  let current: ListNode | null = head;

  while (current != null) {
    const temp: ListNode | null = current.next;
    current.next = pre;

    pre = current;
    current = temp;
  }

  return pre!;
}

const node0 = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node0.next = node1;
node1.next = node2;
node2.next = node3;

reverseList(node0);


// 1, 2, 3, 4, 5
// pre1 current2
// current2.next= pre1

// pre=2 current=3;
