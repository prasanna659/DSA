class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int n = numbers.length;
        HashMap<Integer, Integer> count = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int complement = target - numbers[i]; // Fixed variable name to 'numbers' and typo
            
            if (count.containsKey(complement)) {
                return new int[] { count.get(complement), i + 1 };
            }
            
            count.put(numbers[i], i + 1); // Fixed variable name to 'numbers'
        }
        
        return null;
    }
}