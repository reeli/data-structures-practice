import {ListNode} from "./common/ListNode";

function isPalindrome(head: ListNode | null) {
  let current = head;



  while (current){
    const next = current.next;

    current = next
  }
}

const num1 = new ListNode(1);
const num2 = new ListNode(2);
const num3 = new ListNode(2);
const num4 = new ListNode(1);

num1.next=num2;
num2.next=num3;
num3.next=num4;


console.log(num1)

