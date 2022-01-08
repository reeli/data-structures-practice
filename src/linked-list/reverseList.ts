// 206. 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

import {ListNode} from "./common/ListNode";

// 1. reverseList 相当于遍历了每一个 list node 节点，自顶向下，逐层进入，直到终点
// 2. 走到最后一个节点，此时 head.next 为 null, 自底向上，逐层返回，回到开始处
// 3. last.val 始终为 3，逐层返回修改的是 last.next，当逐层返回到 node2 时，此时 head 为 node2, node2.next.next 相当于将 node3 的 next 设置为 node2，此时 node2.next 指向 node3，node3.next 等于 node2，形成了一个循环
// 4. 将 node2.next 置为空，此时断开这个循环
// 5. 到 node1 时，node1.next 引用还是指向原来的 node2，因此用 node1.next 等于 node2，node1.next.next 相当于在 node2 后面追加自己（node1)，以此类推。

// 参考链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/

function reverseList(head: ListNode): ListNode {
  if (head.next == null) {
    return head
  }

  // before
  let last = reverseList(head.next);
  // console.log(head,'head')
  // after 下面的代码，在递归到底部开始逐层返回时，才可能会被执行
  head.next.next = head;
  head.next = null

  return last;
}

const node0 = new ListNode(0);
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node0.next = node1;
node1.next = node2;
node2.next = node3;

console.log(reverseList(node0),'xx');



