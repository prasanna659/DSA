/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const totalCells = m * n;
    
    
    k = k % totalCells;
    

    const result = Array.from({ length: m }, () => new Array(n));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            
            const flatIndex = i * n + j;
            
          
            const newFlatIndex = (flatIndex + k) % totalCells;
            
           
            const newRow = Math.floor(newFlatIndex / n);
            const newCol = newFlatIndex % n;
            
            result[newRow][newCol] = grid[i][j];
        }
    }
    
    return result;
};