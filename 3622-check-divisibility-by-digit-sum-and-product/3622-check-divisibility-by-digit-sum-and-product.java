class Solution {
    public boolean checkDivisibility(int n) {
    
   int  sum=0;
   int  prod=1;
   int temp=n;
    while(temp>0){
         int digit=temp%10;
         sum+=digit;
         prod*=digit;
         temp/=10;
    
    }
 int total=sum+prod;

return n % total == 0;
    }
    };

//     int n=nums.length;
    //     finalpr=sum+prodt;
    //     sum=n[i]+n[j];
    //     prodt=n[i]*n[j];
    //     for(let i=0;i<n;i++){
    //         if(finalpr===n){
    //             return true;
    //         }
    //     }
    //         return  false;
        
    // // }let x=44
    // // let y=98
    // // reult=x+y/x*y




