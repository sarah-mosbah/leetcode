
 // Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return;
    
    let fast = head;
    let slow = fast;
    
    while(fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;
    }
    
    
    return slow;
};
 function middleNode2(head: ListNode | null): ListNode | null {
    if(!head) return;
    
    let length = 0;
    let node = head;
    
    while(node) {
        length++;
        node = node.next;
    }
    
    const midPos = length % 2 ? Math.round(length/2): Math.round(length/2)+1;
    let i = 1;
    let midNode = head;
    while (i < midPos) {
        i++;
        midNode = midNode.next;
    }
    
    
    return midNode;
};