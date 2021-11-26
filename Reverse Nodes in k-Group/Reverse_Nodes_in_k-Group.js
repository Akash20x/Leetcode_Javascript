



var reverseKGroup = function(head, k) {
    
    let pointer = head;
    let count = 0;
    while (head) {
        head = head.next;
        count++;
    }
    // return if count is less than k units
    if (count < k) return pointer;
    
    // reverse k units
    let i = 0;
    let previous = null;
    while (i < k) {
        let temp = pointer.next;
        pointer.next = previous;
        previous = pointer;
        pointer = temp;
        i++;
    }
   
    // move to last reversed to continue 
    let result = previous;
    while (previous.next) {
        previous = previous.next;
    }
    previous.next = reverseKGroup(pointer, k);
        
    return result;
};
