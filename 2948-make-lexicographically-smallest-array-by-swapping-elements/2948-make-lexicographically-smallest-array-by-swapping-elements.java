class Solution {
    public int[] lexicographicallySmallestArray(int[] nums, int limit) {
        // int n=nums.length;
        // boolean swapped=true;
        // // int i=0;j=0;
        // while(swapped){
        //     swapped=false;

        //      for(int i = 0; i < n; i++) {
        //         for (int j = i + 1; j < n; j++) {
        //             // If element at index j is smaller than index i 
        //             // and their difference is within the limit, swap them
        //             if (nums[j] < nums[i] && Math.abs(nums[i] - nums[j]) <= limit) {
        //                 int temp = nums[i];
        //                 nums[i] = nums[j];
        //                 nums[j] = temp;
        //                 swapped = true;
        //             }
        //         }
            
        //     }
        // }
        
        // return nums;
        int n = nums.length;
        
        // 1. Create pairs of (value, original_index)
        int[][] paired = new int[n][2];
        for (int i = 0; i < n; i++) {
            paired[i][0] = nums[i];
            paired[i][1] = i;
        }
        
        // Sort pairs by value
        Arrays.sort(paired, (a, b) -> Integer.compare(a[0], b[0]));
        
        int[] result = new int[n];
        int i = 0; // Left pointer (start of group)
        
        // 2. Two-pointer traversal
        while (i < n) {
            int j = i + 1; // Right pointer (expands group)
            
            // Expand right pointer while adjacent element difference <= limit
            while (j < n && paired[j][0] - paired[j - 1][0] <= limit) {
                j++;
            }
            
            // Collect original indices for the current valid group [i, j - 1]
            List<Integer> indices = new ArrayList<>();
            for (int k = i; k < j; k++) {
                indices.add(paired[k][1]);
            }
            
            // Sort indices to place smallest values at smallest indices
            Collections.sort(indices);
            
            // Assign sorted values back to original sorted positions
            for (int k = 0; k < indices.size(); k++) {
                result[indices.get(k)] = paired[i + k][0];
            }
            
            // Move left pointer to start of next group
            i = j;
        }
        
        return result;
    }
    }
