class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // nums[i]+nums[j]=target-nums[k]

        Set<List<Integer>> result = new HashSet<>();
        Arrays.sort(nums);
        int n=nums.length;
        for(int i=0;i<n-2;i++){
            if(i>0&&nums[i]==nums[i-1]){
                continue;
            }
            Set<Integer> seen=new HashSet<>();for(int j=i+1;j<n;j++){
                int target=-nums[i]-nums[j];
                if(seen.contains(target)){
                    result.add(Arrays.asList(nums[i],target,nums[j]));
                }
                seen.add(nums[j]);
            }
        }

        return new ArrayList<>(result);
         
    }
}