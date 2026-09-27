class Solution {
    public int minSubArrayLen(int target, int[] nums) {
    //  int left=0;
    //  int minlength=Integer.Max_VALUE;
    //     for(right=0;right<n;right++){
    //         curretsum+=nums[right];
    //         while(currentsum>target){
    //            int minlength=Math.min(minlength,right-left+1);
    //         }
    //         if(minlength==Integer.MAX_VALUE){
    //             return 0;
    //         }
    //         return minlength;
    //     }
             int left = 0;
        int currentSum = 0;
        int minLen = Integer.MAX_VALUE;

        for (int right = 0; right < nums.length; right++) {
            currentSum += nums[right];

            while (currentSum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                currentSum -= nums[left];
                left++;
            }
        }

        return minLen == Integer.MAX_VALUE ? 0 : minLen;

    }
}