/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        adj[u].push(v);
    }

    
    const isSuspicious = new Array(n).fill(false);
    const queue = [k];
    isSuspicious[k] = true;

    while (queue.length > 0) {
        const curr = queue.shift();
        for (const neighbor of adj[curr]) {
            if (!isSuspicious[neighbor]) {
                isSuspicious[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    
    for (const [u, v] of invocations) {
        if (!isSuspicious[u] && isSuspicious[v]) {
           
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    
    const result = [];
    for (let i = 0; i < n; i++) {
        if (!isSuspicious[i]) {
            result.push(i);
        }
    }

    return result;
};