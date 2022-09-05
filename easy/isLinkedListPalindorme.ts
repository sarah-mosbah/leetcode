function isPalindrome(head: ListNode | null): boolean {
    if(!head || !head.next) return true;
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondHalf = slow.next;
    let firstHalf = head;
    slow.next = null;
    const reverse = (secondHalf)  => {
        let prev  = null;
        while(secondHalf) {
            let temp = secondHalf.next;
            secondHalf.next = prev;
            prev= secondHalf;
            secondHalf = temp;
        }
        return prev;
    }
    let prev = reverse(secondHalf);
    while(prev && firstHalf) {
        if(firstHalf.val !== prev.val) return false;
        prev= prev.next;
        firstHalf = firstHalf.next;
    }
    return true;
};

