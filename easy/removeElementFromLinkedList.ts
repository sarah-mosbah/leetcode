
function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(!head) return head;
    let temp= new ListNode();
    temp.next = head;
    let dummyNode = temp;
    while(temp) {
        if(temp.next && temp.next.val === val) {
            temp.next = temp.next.next;
        } else  {
            temp = temp.next
        }
    }
    
    return dummyNode.next;
};