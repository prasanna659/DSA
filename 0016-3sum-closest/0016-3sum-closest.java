class Solution {
    public int threeSumClosest(int[] nums, int target) {
        // int n=nums.length;
        // int sum=0;
        // for(int i=0;i<n;i++){
        //     sum+=nums[i];
        //     i++;
        // }
        // while(sum>=target){
        //     left--;
        // }

        int n=nums.length;
        Arrays.sort(nums);
        int clzesum=nums[0]+nums[1]+nums[2];
        for(int i=0;i<n-2;i++){
            int left=i+1;
            int right=n-1;
            while(left<right){
              int currntsum=  nums[i]+nums[left]+nums[right];
              if(currntsum==target){
                return currntsum;
              }
              if(Math.abs(currntsum-target)<Math.abs(clzesum-target)){
                clzesum=currntsum;
              }
// Adjust pointers
                if (currntsum < target) {
                    left++;
                } else {
                    right--;
                
            }
            }
        }
    return clzesum;
    }
}