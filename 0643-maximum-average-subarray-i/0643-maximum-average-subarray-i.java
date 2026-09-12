class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int n=nums.length;
       double sum=0;
       
       for(int i=0;i<k;i++){
        sum+=nums[i];
       }
       double maxsum=sum;
      int  left=0;
      int  right=k;

       while(right<n){
        sum+=nums[right]-nums[left];
        maxsum=Math.max(maxsum,sum);
        left++;
        right++;
          //maxavg=max(sum);
       }
       return maxsum/k;

    }
}