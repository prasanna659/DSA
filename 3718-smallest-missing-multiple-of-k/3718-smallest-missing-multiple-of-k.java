class Solution {
    public int missingMultiple(int[] nums, int k) {
        // int n=nums.length;
        //  int mul[]=new  mul[k];
        // int nums.sort(a,b)=>(a-b);
        // for(int i=0;i<n-1;i++){
        //     if(nums[i]%k==0)
        //     return nums.push(mul);
        // }
        // return min(nums[i])




        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        
        int multiple = k;
        while (set.contains(multiple)) {
            multiple += k;
        }
        
        return multiple;
    }
};