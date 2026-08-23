class Solution {
    public boolean sumGame(String num) {
        int leftSum = 0, rightSum = 0;
        int leftQ = 0, rightQ = 0;
        int n = num.length();

        for (int i = 0; i < n; i++) {
            char c = num.charAt(i);
            if (i < n / 2) {
                if (c == '?') leftQ++;
                else leftSum += c - '0';
            } else {
                if (c == '?') rightQ++;
                else rightSum += c - '0';
            }
        }

        
        if ((leftQ + rightQ) % 2 != 0) {
            return true;
        }

        
        return (leftSum - rightSum) * 2 != 9 * (rightQ - leftQ);
    }
}