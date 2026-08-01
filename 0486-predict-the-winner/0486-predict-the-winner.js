/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
     const dp = new Map();

    // Returns the maximum score difference
    // currentPlayerScore - otherPlayerScore
    function solve(left, right) {

        // Only one number is left, so the current player takes it.
        if (left === right) {
            return nums[left];
        }

        // Create a unique key for this range
        const key = left + "," + right;

        // If already calculated, return it
        if (dp.has(key)) {
            return dp.get(key);
        }

        // If we pick the left number
        // opponent will then play optimally
        const chooseLeft =
            nums[left] - solve(left + 1, right);

        // If we pick the right number
        const chooseRight =
            nums[right] - solve(left, right - 1);

        // Current player chooses the better option
        const answer = Math.max(chooseLeft, chooseRight);

        // Save the result
        dp.set(key, answer);

        return answer;
    }

    // If Player 1 can keep the score difference
    // non-negative, then Player 1 can win (or tie).
    return solve(0, nums.length - 1) >= 0;
};