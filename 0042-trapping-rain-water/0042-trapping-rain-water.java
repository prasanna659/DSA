class Solution {
    public int trap(int[] height) {
        // int n=height.length;
        // int water=0;
        // for(int i=0;i<n;i++){
        //     int rightmax=0;
        //     int leftmax=0;
        //     for(int j=i;j>=0;j--){
        //         leftmax=Math.max(leftmax,height[j]);
        //     }
        //     for(int j=i;j<n;j++){
        //         rightmax=Math.max(rightmax,height[j]);

        //     }
        //         water+=Math.min(leftmax,rightmax)-height[i];
        //     }
        //     return water;
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int totalWater = 0;

        while (left < right) {
            if (height[left] <= height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }

        return totalWater;
    
   }
}