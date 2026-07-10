/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const maxLog = 32 - Math.clz32(n) + 1;
    const up = Array.from({ length: maxLog }, () => new Int32Array(n));
    const pos = new Int32Array(n);

    const sortedNums = new Array(n);
    for (let i = 0; i < n; i++) {
        sortedNums[i] = { val: nums[i], id: i };
    }
    sortedNums.sort((a, b) => a.val - b.val);

    for (let i = 0; i < n; i++) {
        pos[sortedNums[i].id] = i;
    }

    let r = 0;
    for (let l = 0; l < n; l++) {
        while (r + 1 < n && sortedNums[r + 1].val - sortedNums[l].val <= maxDiff) {
            r++;
        }
        up[0][l] = r;
    }

    for (let j = 1; j < maxLog; j++) {
        for (let i = 0; i < n; i++) {
            up[j][i] = up[j - 1][up[j - 1][i]];
        }
    }

    const queryDistance = (u, v) => {
        if (u === v) return 0;
        if (up[0][u] >= v) return 1;
        if (up[maxLog - 1][u] < v) return -1;

        let steps = 0;
        for (let j = maxLog - 1; j >= 0; j--) {
            if (up[j][u] < v) {
                steps += (1 << j);
                u = up[j][u];
            }
        }
        return steps + 1;
    };

    const ans = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        let u = pos[queries[i][0]];
        let v = pos[queries[i][1]];
        
        if (u > v) {
            const temp = u; u = v; v = temp;
        }

        ans[i] = queryDistance(u, v);
    }

    return ans;
};