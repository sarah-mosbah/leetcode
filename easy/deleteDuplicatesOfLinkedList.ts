function deleteDuplicates(head: ListNode | null): ListNode | null {

    if(!head) return head;
    let prev = head;
    let current = head.next;
    let dummyNode = prev;
    while(current) {
        if(prev.val === current.val) {
            prev.next = current.next;
        } else {
             prev = current
        }
        current = current.next;
        
    }
    
    return dummyNode;
};

function deleteDuplicates2(head: ListNode | null): ListNode | null {

    if(!head) return head;
    let dummyNode = head;
    while(head && head.next) {
        if(head.val === head.next.val) {
           head.next = head.next.next
        } else {
            head = head.next; 
        }
        
    }
    
    return dummyNode;
};