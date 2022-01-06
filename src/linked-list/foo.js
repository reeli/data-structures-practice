let frontPointer;

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false;
    }

    if (currentNode.val !== frontPointer.val) {
      return false;
    }

    console.log(frontPointer, "frontPointer")
    console.log(currentNode,'currentNode')
    frontPointer = frontPointer.next;
  }
  return true;
}

var isPalindrome = function(head) {
  frontPointer = head;
  return recursivelyCheck(head);
};

class ListNode {
  constructor(val, next) {
    this.val = val===undefined ? 0 : val
    this.next=next === undefined ? null :next;
  }
}

const num1 = new ListNode(1);
const num2 = new ListNode(2);
const num3 = new ListNode(2);
const num4 = new ListNode(1);

num1.next=num2;
num2.next=num3;
num3.next=num4;

isPalindrome(num1)
