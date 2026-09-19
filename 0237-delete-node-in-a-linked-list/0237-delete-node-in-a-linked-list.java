/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
    //     if(head==node){
    //         head=head->next
    //         return node
    //     }
    // }
    node.val=node.next.val;
    node.next=node.next.next;
}}