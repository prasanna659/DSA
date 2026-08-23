class Solution {
    public int majorityElement(int[] nums) {
    //    int count ={};
    //    int n=nums.length;
    //    for(int  i=0;i<n;i++){
    //     if(n.seen>n/2){
    //     return n[i];
    //     }
    //    }
    // }
Map<Integer, Integer> counts = new HashMap<>();
        int n = nums.length;

        for (int num : nums) {
            int count = counts.getOrDefault(num, 0) + 1;
            if (count > n / 2) {
                return num;
            }
            counts.put(num, count);
        }

        return -1;
    }

    // int n=nums.length;
    // HashSet<Integer>=seen HashSet<Integer>
    // for(int i=0;i<n;i++){
    //         if(nums[i].seen>n/2){
    //             return nums[i]
    //         }
    // }
};