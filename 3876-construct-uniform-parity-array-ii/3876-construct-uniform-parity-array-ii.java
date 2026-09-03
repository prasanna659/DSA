class Solution {
    public boolean uniformArray(int[] nums1) {
        //return true;
        int min = nums1[0];
        boolean hasOdd = false;

        for (int x : nums1) {
            min = Math.min(min, x);
            if (x % 2 != 0) {
                hasOdd = true;
            }
        }

        // Returns true if min is odd OR there are no odd numbers
        return min % 2 != 0 || !hasOdd;

    }}
