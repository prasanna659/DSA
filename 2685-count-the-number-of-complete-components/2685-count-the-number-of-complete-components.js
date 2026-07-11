/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let completeComponentsCount = 0;

    function dfs(node, componentInfo) {
        visited[node] = true;
        componentInfo.V++;
        componentInfo.E += adj[node].length;

        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, componentInfo);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const componentInfo = { V: 0, E: 0 };
            dfs(i, componentInfo);

            if (componentInfo.E === componentInfo.V * (componentInfo.V - 1)) {
                completeComponentsCount++;
            }
        }
    }

    return completeComponentsCount;
};