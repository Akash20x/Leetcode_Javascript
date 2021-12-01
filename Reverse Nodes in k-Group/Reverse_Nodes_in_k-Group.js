/* Approach: We are given a linked list where head 
points to it's starting position. We have to reverse
every k nodes of linked list until we reach end of linked
list. But we have one condition that after reversing
K nodes each time, if left out nodes of linkedIn list 
are less than k, then no need to reverse that nodes and 
join them with reverse linked list part nodes and return
modified linked list. 

To solve this, count no of nodes in linked list using head.
Then we check if nodes of linked list is less than k or not. 
If less, then we simply return the same linked list. 
If more than equal to k we will reverse first k nodes of 
linked list and then pointer will store starting position of
other part of linked list and previous will store last node of 
reversed linked list.Then we move previous to the first node of
reversed linked list and will pass other part of linked list in
recursive call, same above steps will be repeated for this part
of linked list,if no of nodes in this part are less than k then
return this part of linked list without any change in the
recursive call and previous next will connect reversed part with this part
and finally return the modified linked list. 
*/




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
