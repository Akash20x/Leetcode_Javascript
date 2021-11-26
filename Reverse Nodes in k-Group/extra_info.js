
function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
  }
 
const next4 = new ListNode(5,null);
const next3 = new ListNode(4,next4);
const next2 = new ListNode(3,next3); 
const next = new ListNode(2,next2) ;
const head = new ListNode(1,next); 

arr=[]
i=0
var l = head;
while (l) {
    arr[i]=l.val;
    l = l.next;
    i++
}

console.log(arr)

