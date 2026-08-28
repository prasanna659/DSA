class Solution {
    public String lexPalindromicPermutation(String s, String target) {
        int n = s.length();
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        int oddCount = 0;
        int oddChar = -1;
        for (int i = 0; i < 26; i++) {
            if (count[i] % 2 != 0) {
                oddCount++;
                oddChar = i;
            }
        }

        if (oddCount > 1) return "";

        int m = n / 2;
        int[] halfCount = new int[26];
        for (int i = 0; i < 26; i++) {
            halfCount[i] = count[i] / 2;
        }

       
        for (int L = m; L >= 0; L--) {
            int[] rem = halfCount.clone();
            boolean possible = true;
            
           
            for (int i = 0; i < L; i++) {
                int ch = target.charAt(i) - 'a';
                if (rem[ch] > 0) {
                    rem[ch]--;
                } else {
                    possible = false;
                    break;
                }
            }
            if (!possible) continue;

            if (L < m) {
                int targetChar = target.charAt(L) - 'a';
                for (int c = targetChar + 1; c < 26; c++) {
                    if (rem[c] > 0) {
                        int[] curRem = rem.clone();
                        curRem[c]--;

                        StringBuilder sb = new StringBuilder();
                        sb.append(target, 0, L);
                        sb.append((char) ('a' + c));

                        
                        for (int i = 0; i < 26; i++) {
                            while (curRem[i] > 0) {
                                sb.append((char) ('a' + i));
                                curRem[i]--;
                            }
                        }

                        String firstHalf = sb.toString();
                        String full = buildPalindrome(firstHalf, oddChar, n);
                        if (full.compareTo(target) > 0) {
                            return full;
                        }
                    }
                }
            } 
           
            else if (L == m) {
                StringBuilder sb = new StringBuilder();
                sb.append(target, 0, m);

                String firstHalf = sb.toString();
                String full = buildPalindrome(firstHalf, oddChar, n);
                if (full.compareTo(target) > 0) {
                    return full;
                }
            }
        }

        return "";
    }

    private String buildPalindrome(String firstHalf, int oddChar, int n) {
        StringBuilder sb = new StringBuilder(firstHalf);
        if (n % 2 != 0) {
            sb.append((char) ('a' + oddChar));
        }
        for (int i = firstHalf.length() - 1; i >= 0; i--) {
            sb.append(firstHalf.charAt(i));
        }
        return sb.toString();
    }
}