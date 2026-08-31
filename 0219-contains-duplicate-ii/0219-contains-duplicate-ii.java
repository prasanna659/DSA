class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int n=nums.length;
       Set<Integer> seen = new HashSet<>();
        for(int i=0;i<n;i++){
            if(seen.contains(nums[i])) {
                //&&abs(i-j)
        return true;
        }
        seen.add(nums[i]);
    
    if(seen.size()>k){
        seen.remove(nums[i-k]);
    }
}
     return false;

}
}
// int i=0;
// int j=n-1;
// for(int i=0;i<n;i++){
//     if((nums[i]==nums[j] && abs(i-j<=k)){
// return true
//     }
    
// }
// return false
//     }