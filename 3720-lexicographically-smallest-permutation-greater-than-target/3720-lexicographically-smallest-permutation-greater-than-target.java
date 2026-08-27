class Solution {
    public String lexGreaterPermutation(String s, String target) {
      int n = s.length();
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

     
        int matchedLen = 0;
        int[] tempCount = count.clone();
        for (int i = 0; i < n; i++) {
            char tChar = target.charAt(i);
            if (tempCount[tChar - 'a'] > 0) {
                tempCount[tChar - 'a']--;
                matchedLen++;
            } else {
                break;
            }
        }

        
        for (int i = matchedLen; i >= 0; i--) {
          
            int[] currentCount = count.clone();
            for (int k = 0; k < i; k++) {
                currentCount[target.charAt(k) - 'a']--;
            }

            int targetCharIndex = (i < n) ? (target.charAt(i) - 'a') : -1;

           
            for (int c = targetCharIndex + 1; c < 26; c++) {
                if (currentCount[c] > 0) {
                    currentCount[c]--;
                
                    StringBuilder sb = new StringBuilder();
                    sb.append(target.substring(0, i));
                    sb.append((char) ('a' + c));
                    
                  
                    for (int ch = 0; ch < 26; ch++) {
                        while (currentCount[ch] > 0) {
                            sb.append((char) ('a' + ch));
                            currentCount[ch]--;
                        }
                    }
                    return sb.toString();
                }
            }
        }

        return "";
    }  
    };