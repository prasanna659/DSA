class Solution {
    public boolean checkInclusion(String s1, String s2) {
    //     n1=s1.length;
    //     n2=s2.length;
    //     if(n1>n2) return false;
    // //   int left=0;
    // //   int right=0;
    //   HashMap<Charcter,Integer> s1count=new HashMap<>();
    //   HashMap<Charcter,Integer> s2count=new HashMap<>();
    //   for(i =0;i<n;i++){
    //      char i=s1.charAt(i);
    //      s1count.put(i,s1count.getOrDefault(i,0)+1);
    //   }

    //   for(int right=0;right<n2;right++){
    //     char rightchar=s2.charAt(right);
    //     s2count.put(right,s2count.getOrDefault(right,0)+1);


    //     if(right>=n1){
    //         char leftchar=s2.charAt(right);
    //         s2count.put(s2count,s2count.get(leftchar)-1);
    //     }
    //   }
    //   if (right >= n1 - 1 && windowMap.equals(s1Map)) {
    //             return true;
    //         }


    int n1 = s1.length();
        int n2 = s2.length();
        
        if (n1 > n2) return false;

        Map<Character, Integer> s1Map = new HashMap<>();
        Map<Character, Integer> windowMap = new HashMap<>();

       
        for (int i = 0; i < n1; i++) {
            char c = s1.charAt(i);
            s1Map.put(c, s1Map.getOrDefault(c, 0) + 1);
        }

        for (int right = 0; right < n2; right++) {
            char rightChar = s2.charAt(right);
            windowMap.put(rightChar, windowMap.getOrDefault(rightChar, 0) + 1);

           
            if (right >= n1) {
                char leftChar = s2.charAt(right - n1);
                if (windowMap.get(leftChar) == 1) {
                    windowMap.remove(leftChar);
                } else {
                    windowMap.put(leftChar, windowMap.get(leftChar) - 1);
                }
            }

           
            if (right >= n1 - 1 && windowMap.equals(s1Map)) {
                return true;
            }
        }

        return false;
    }
}