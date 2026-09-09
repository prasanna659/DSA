class Solution {
    public int missingNumber(int[] nums) {
        int n=nums.length;
        HashSet<Integer> seen =new HashSet<>();
        for(int i=0;i<n;i++){
            seen.add(nums[i]);
        }
        for(int i=0;i<=n;i++){
            if(!seen.contains(i)){
                return i;          }
        }
        return -1;
    }
}