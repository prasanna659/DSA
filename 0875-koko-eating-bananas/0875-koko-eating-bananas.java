class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        // Find the maximum pile size to know the upper bound of speeds
        int low = 1;
        int high = 0;
        
        // Find the upper bound (maximum pile size)
        for (int pile : piles) {
            high = Math.max(high, pile);
        }
        
        int res = high;
        
        // Binary search for the minimum eating speed k
        while (low <= high) {
            int k = low + (high - low) / 2;
            
            // Calculate total hours needed at speed k
            long totalHours = 0;
            for (int pile : piles) {
                totalHours += (pile + k - 1) / k; // Equivalent to Math.ceil((double) pile / k)
            }
            
            // If total hours <= h, k is a valid speed; try a smaller speed
            if (totalHours <= h) {
                res = k;
                high = k - 1;
            } else {
                // Speed is too slow; increase low bound
                low = k + 1;
            }
        }
        
        return res;
    }
}