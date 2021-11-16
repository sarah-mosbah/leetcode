/* Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, and return the new head. */

export class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = val ? 0 : val;
            this.next = next ? null : next;
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(!head) {
        return null;
    }
    let node = head;
    let prev = node;
    let headFirst = null;
    while(node) {
        if(node.val === val) {
            prev.next = node.next;
            node = node.next;
        } else {
            if(!headFirst) {
                headFirst = node
            }
            prev = node;
            node = node.next;
        }
    }
    return headFirst;
};

function removeElementsAnotherApproach(head: ListNode | null, val: number): ListNode | null {
    while(head && head.val === val) {
        head = head.next;
    }
    let node = head;
    while(node && node.next) {
        if(node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};

function removeElementsRecursive(head: ListNode | null, val: number): ListNode | null {
    if (head == null) {return null; }
    head.next = removeElementsRecursive(head.next, val);
    return head.val == val ? head.next : head;
}

