class Solution {
    public int totalNumbers(int[] digits) {
    //     int n=digits.length;
    //    // <list> resul
    //    int  result=[];
    //     for(int i=0;i<n;i++){
    //          if(digits[i]%2==0){
    //             digits.push(result);
    //          }

    //     }
    //     while(result<=3){
    //           return udigits.length;
    //     }
    //    return -1;
       
    Set<Integer> unique=new HashSet<>();
    int n=digits.length;
    for(int i=0;i<n;i++){
        if(digits[i]==0) continue;
        for(int j=0;j<n;j++){
            if(i==j) continue;
            for(int k=0;k<n;k++){
                if(k==j||k==i ) continue;
                if(digits[k]%2==0){
                    int num = digits[i] * 100 + digits[j] * 10 + digits[k];
                    unique.add(num);
                }
            }
        }
    }

     return unique.size();
    }
}