/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return new int[]{-1, -1};
        }

        ListNode prev = head;
        ListNode curr = head.next;
        int index = 1;

        int firstCriticalIndex = -1;
        int lastCriticalIndex = -1;
        int minDistance = Integer.MAX_VALUE;

        while (curr.next != null) {
            ListNode nextNode = curr.next;

            
            boolean isMaxima = curr.val > prev.val && curr.val > nextNode.val;
            boolean isMinima = curr.val < prev.val && curr.val < nextNode.val;

            if (isMaxima || isMinima) {
                if (firstCriticalIndex == -1) {
                    firstCriticalIndex = index;
                } else {
                    minDistance = Math.min(minDistance, index - lastCriticalIndex);
                }
                lastCriticalIndex = index;
            }

            prev = curr;
            curr = nextNode;
            index++;
        }

       
        if (minDistance == Integer.MAX_VALUE) {
            return new int[]{-1, -1};
        }

        int maxDistance = lastCriticalIndex - firstCriticalIndex;
        return new int[]{minDistance, maxDistance};
    }
}