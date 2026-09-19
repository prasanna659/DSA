class MyLinkedList {
     private class ListNode{
        int val;
        ListNode next;


        ListNode(int val){
            this.val=val;
            this.next=null;
        }
     }
     private int size;
     private ListNode temp;
    public MyLinkedList() {
        this.size=0;
        this.temp=new ListNode(0);

    }
    
    public int get(int index) {
        if(index<0||index>=size){
            return -1;
        }

        ListNode curr=temp.next;
        for(int i=0;i<index;i++){
            curr=curr.next;
        }
        return curr.val;
    }
    
    public void addAtHead(int val) {
        addAtIndex(0,val);
    }
    
    public void addAtTail(int val) {
        addAtIndex(size,val);
    }
    
    public void addAtIndex(int index, int val) {
        if(index>size){
            return;
        }
        if(index<0){
            index=0;
        }
        size++;
        ListNode prev =temp;
        for(int i=0;i<index;i++){
            prev=prev.next;
        }
        ListNode toAdd = new ListNode(val);
        toAdd.next=prev.next;
        prev.next=toAdd;
    }
    
    public void deleteAtIndex(int index) {
        if(index<0||index>=size){
            return;
        }
    
    size--;
    ListNode prev=temp;
    for(int i=0;i<index;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;
}
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */