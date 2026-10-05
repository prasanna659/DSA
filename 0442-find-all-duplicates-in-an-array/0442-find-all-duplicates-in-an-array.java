class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        int n=nums.length;
         List<Integer> result= new ArrayList<>();
        HashSet<Integer> seen =new HashSet<>();
        for(int i=0;i<n;i++){
            // nums.add(seen)i++;
            if(seen.contains(nums[i])){
             result.add(nums[i]);
            }else{
             seen.add(nums[i]);
               
            }
             
            
        }
        return result;
    }
}