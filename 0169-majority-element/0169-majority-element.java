class Solution {
    public int majorityElement(int[] nums) {
         int n=nums.length;
        // count ={}
        // for(int i=0;i<n;i++){
        //     if(count(nums[i]>n/2)){
        //         return nums[i]
        //     }
        // }

        Arrays.sort(nums);
        return nums[n/2];
    }
}