class Solution {
    public int characterReplacement(String s, int k) {
        HashMap<Character,Integer> count =new HashMap<>();
        int maxCount = 0;
        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
          char rightchar=s.charAt(right);
          count.put(rightchar,count.getOrDefault(rightchar,0)+1);
          maxCount=Math.max(maxCount,count.get(rightchar));
        
          while (right-left+1-maxCount>k){
            char leftchar=s.charAt(left);
            count.put(leftchar,count.get(leftchar)-1);
            left++;
          }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}