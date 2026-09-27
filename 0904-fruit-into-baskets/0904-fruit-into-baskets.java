class Solution {
    public int totalFruit(int[] fruits) {
        // int n=nums.length;
        // int fruits=0;
        // int fruits[i]=0;
        // int maxlength=0;
        // HashMap<character,Integer> count=new HashMap<>();
        
        // int left=0;
        // for(int right=0;right<n;right++){
        //    int basket=fruits[i]
        //    count.put(count,basket(fruits))
        // }
        // if(basket>fruits[i]){
        //     int left=basket[fruits];
        //     count.put(count,left(fruits)-1)
        //     left++;
        // }

        // count.max(maxlength,windoww)

        Map<Integer, Integer> count = new HashMap<>();
        int left = 0;
        int maxFruits = 0;

        for (int right = 0; right < fruits.length; right++) {
            // Add current fruit to the basket (frequency map)
            count.put(fruits[right], count.getOrDefault(fruits[right], 0) + 1);

            // If we have more than 2 types of fruit, shrink window from the left
            while (count.size() > 2) {
                count.put(fruits[left], count.get(fruits[left]) - 1);
                if (count.get(fruits[left]) == 0) {
                    count.remove(fruits[left]);
                }
                left++;
            }

            // Update max length of valid window
            maxFruits = Math.max(maxFruits, right - left + 1);
        }

        return maxFruits;
        
    }
}