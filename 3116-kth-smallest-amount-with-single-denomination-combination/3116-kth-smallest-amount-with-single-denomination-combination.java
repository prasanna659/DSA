class Solution {
    public long findKthSmallest(int[] coins, int k) {
        long low = 1;
        long minCoin = coins[0];
        for (int coin : coins) {
            minCoin = Math.min(minCoin, coin);
        }
        long high = minCoin * (long) k;
        long ans = high;

        while (low <= high) {
            long mid = low + (high - low) / 2;
            if (count(mid, coins) >= k) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    private long count(long target, int[] coins) {
        int n = coins.length;
        long total = 0;

       
        for (int mask = 1; mask < (1 << n); mask++) {
            long currentLcm = 1;
            int bitCount = 0;

            for (int i = 0; i < n; i++) {
                if (((mask >> i) & 1) == 1) {
                    bitCount++;
                    currentLcm = lcm(currentLcm, coins[i]);
                    if (currentLcm > target) break; 
                }
            }

            if (bitCount % 2 == 1) {
                total += target / currentLcm;
            } else {
                total -= target / currentLcm;
            }
        }

        return total;
    }

    private long gcd(long a, long b) {
        while (b != 0) {
            long temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    private long lcm(long a, long b) {
        return (a / gcd(a, b)) * b;
    }
 }
