class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
    //     int n=nums.length;
    //     int result=[]
    //     HashSet<integer> set=new HashSet<>
    //     for(let i=0;i<n;i++){
    //         if(set.contains[nums[i]])

    //          return result.add(nums)
    //     }
    //     if(n===result(nums))
    //      result.add(nums[i])
    // }
 


        List<Integer> result = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        
        for (int num : nums) {
            set.add(num);
        }
        
        for (int i = 1; i <= nums.length; i++) {
            if (!set.contains(i)) {
                result.add(i);
            }
        }
        
        return result;
    }
}
