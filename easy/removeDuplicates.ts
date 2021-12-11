import { ListNode } from "./removeLinkedListItem";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) {
        return head;
    }
    let temp = head.next;
    let prev = head;
    while(temp) {
        if(temp.val === prev.val) {
            prev.next = temp.next
        } else {
            prev = temp;
        }
        temp = temp.next;
    }
    
    return head;
};