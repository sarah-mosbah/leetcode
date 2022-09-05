
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let lengthNodeA = 0;
    let nodeA = headA;
      let lengthNodeB = 0;
    let nodeB = headB;
    while(headA) {
        lengthNodeA++;
        headA = headA.next
    }
    while(headB) {
        lengthNodeB++;
        headB = headB.next
    }
    
    if(lengthNodeA > lengthNodeB) {
        for(let i =0; i < lengthNodeA - lengthNodeB; i++) {
            nodeA = nodeA.next;
        }
    } else  {
          for(let i =0; i <lengthNodeB - lengthNodeA; i++) {
            nodeB = nodeB.next;
        }
    }
    
    while(nodeA && nodeB) {
        if(nodeA === nodeB) {
            return nodeA;
        }
        nodeA= nodeA.next;
        nodeB= nodeB.next;
    }
    
    return null;

};