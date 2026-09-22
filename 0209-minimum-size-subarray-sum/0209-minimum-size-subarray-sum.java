class Solution {
    public int minSubArrayLen(int target, int[] nums) {
    //     int n=nums.length;
    //     Hahset<Integer> seen= new HashSet<>();
    //     int minlength=0;
    //     for(int i=0;i<n;i++){
    //         complement=nums[i]-target;
    //         if(seen.contains(complement){
    //              return nums[i];
    //         }
    //         seen.add(nums[i]);
    //     }
    // }
    int n=nums.length;
    int left=0;
    int sum=0;
    int minlength=nums.length+1;
    for(int right=0;right<n;right++){
           sum+=nums[right];
           while(sum>=target){
            int curlen=right-left+1;
              if(curlen<minlength){
                minlength=curlen;
              }
              sum-=nums[left];

              left++;
           }
    }
         if (minlength > nums.length) {
            return 0;
        } else {
            return minlength;
        }
    }
}
