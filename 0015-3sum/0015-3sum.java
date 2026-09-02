class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            Set<Integer> seen = new HashSet<>();
            int target = -nums[i];

            for (int j = i + 1; j < nums.length; j++) {
                int complement = target - nums[j];

                if (seen.contains(complement)) {
                    result.add(Arrays.asList(nums[i], complement, nums[j]));
                    
                    
                    while (j + 1 < nums.length && nums[j] == nums[j + 1]) {
                        j++;
                    }
                }
                seen.add(nums[j]);
            }
        }

        return result;
    }
}
//         int n=nums.length;
//         List<List<Integer>> result =new ArrayList<>();
//         Arrays.sort(nums);
//         for(int i=0;i<n-1;i++){
//             if(i>0 && nums[i]==num[i-1]) continue;
//             Set<Integer> seen=new HashSet<>();
//             int target=-nums[i];
//             for(int j=i+1;j<n-1;j++){
//                 int complement =target-nums[j];
//                 if(seen.contains(complement))
//                 result.add(Array.assLisst(nums[i],complement,nums[j]));
//                 while(j+1<n&&num[j]==nums[j+1]){
//                     j++;
//                 }
//             }
//         }
//         seen.add(nums[j]);

//     }
// }
// return result;
// }
// }