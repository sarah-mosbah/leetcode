/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummyNode = new ListNode();
    
    dummyNode.next = head;
    
    let fast = dummyNode; let slow =dummyNode;
    
    for(let i=0; i < n+1; i++) {
        fast = fast.next;
    }
    
    while(fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return  dummyNode.next;
};