import { ListNode } from "./removeLinkedListItem";

 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyNode = new ListNode();
    let mergedNode = dummyNode;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            mergedNode.next = l1;
            l1 = l1.next;
        } else {
             mergedNode.next = l2;
            l2 = l2.next;
        }
        
        mergedNode = mergedNode.next;
    }
    
    mergedNode.next = l1 || l2;
    
    return dummyNode.next;
};