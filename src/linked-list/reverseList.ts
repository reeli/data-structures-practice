import {ListNode} from "./common/ListNode";

let i = 0;

function reverseList(head: ListNode): ListNode {
  const d = i++
  console.log("> reverseList",d,"head: ",head.val)
  if (head.next == null) {
    return head
  }
  let last = reverseList(head.next);

  console.log("< reverseList",d,"last: ", last?.val)
  return last;
}

const node0 = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node0.next = node1;
node1.next = node2;
node2.next = node3;

reverseList(node0);
//                 head  last
// reverseList 0   0      1
// reverseList 1   1      2
// reverseList 2   2      x


