class Solution {
    public String shortestBeautifulSubstring(String s, int k) {
        int n = s.length();
        String ans = "";
        
        
        java.util.List<Integer> ones = new java.util.ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '1') {
                ones.add(i);
            }
        }
        
        
        if (ones.size() < k) {
            return "";
        }
        
       
        for (int i = 0; i <= ones.size() - k; i++) {
            int start = ones.get(i);
            int end = ones.get(i + k - 1);
            String sub = s.substring(start, end + 1);
            
            if (ans.isEmpty() || sub.length() < ans.length() || 
               (sub.length() == ans.length() && sub.compareTo(ans) < 0)) {
                ans = sub;
            }
        }
        
        return ans;
    }
    };