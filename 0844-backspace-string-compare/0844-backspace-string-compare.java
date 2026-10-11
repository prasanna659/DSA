// class Solution {
//     public boolean backspaceCompare(String s, String t) {
//         // return true;
//     //     n=s.length()&&t.length();
//     //     if(s.length()==t.length());return true;
//     //     int i=0;,j=n-1;
//     //     while(j<n){
//     //         if(s[j]=="#"){
//     //             s.pop(s[j-1]);
//     //             i++;
//     //         }
//     //         else{
//     //             if(t[j]=="#"){
//     //                 t.pop(t[j-1]);

//     //             }
//     //         }
//     //     }
//     //     return true;
//     // }
//     }
   
// }

class Solution {
    public boolean backspaceCompare(String s, String t) {
        return build(s).equals(build(t));
    }
    
    // Helper function to simulate typing and backspacing
    private String build(String str) {
        StringBuilder sb = new StringBuilder();
        
        for (char c : str.toCharArray()) {
            if (c != '#') {
                sb.append(c); // Type the character
            } else if (sb.length() > 0) {
                sb.deleteCharAt(sb.length() - 1); // Backspace (delete last character)
            }
        }
        
        return sb.toString();
    }
}