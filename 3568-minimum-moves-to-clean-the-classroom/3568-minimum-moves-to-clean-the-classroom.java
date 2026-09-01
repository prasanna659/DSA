class Solution {
    public int minMoves(String[] classroom, int energy) {
        // int classroom=[][]
        // int maxenergy=
        int m = classroom.length;
        int n = classroom[0].length();
        
        int startX = -1, startY = -1;
        List<int[]> litterList = new ArrayList<>();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = classroom[i].charAt(j);
                if (c == 'S') {
                    startX = i;
                    startY = j;
                } else if (c == 'L') {
                    litterList.add(new int[]{i, j});
                }
            }
        }
        
        int k = litterList.size();
        int targetMask = (1 << k) - 1;
        
        // Map (x, y) coordinates of 'L' to bit indices
        int[][] litterIndex = new int[m][n];
        for (int i = 0; i < m; i++) {
            Arrays.fill(litterIndex[i], -1);
        }
        for (int i = 0; i < k; i++) {
            int[] pos = litterList.get(i);
            litterIndex[pos[0]][pos[1]] = i;
        }
        
        // bestEnergy[x][y][mask] stores the max remaining energy reached at (x, y) with mask
        int[][][] bestEnergy = new int[m][n][1 << k];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                Arrays.fill(bestEnergy[i][j], -1);
            }
        }
        
        // Queue state: {x, y, mask, remainingEnergy, steps}
        Queue<int[]> queue = new LinkedList<>();
        
        int initialMask = 0;
        if (litterIndex[startX][startY] != -1) {
            initialMask |= (1 << litterIndex[startX][startY]);
        }
        
        if (initialMask == targetMask) return 0;
        
        queue.offer(new int[]{startX, startY, initialMask, energy, 0});
        bestEnergy[startX][startY][initialMask] = energy;
        
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int x = curr[0];
            int y = curr[1];
            int mask = curr[2];
            int e = curr[3];
            int steps = curr[4];
            
            if (mask == targetMask) {
                return steps;
            }
            
            if (e == 0) continue; // Out of energy to make the next move
            
            for (int[] dir : dirs) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                char cell = classroom[nx].charAt(ny);
                if (cell == 'X') continue;
                
                int nextMask = mask;
                if (cell == 'L') {
                    int idx = litterIndex[nx][ny];
                    if (idx != -1) {
                        nextMask |= (1 << idx);
                    }
                }
                
                int nextEnergy = e - 1;
                if (cell == 'R') {
                    nextEnergy = energy; // Reset energy to full capacity
                }
                
                // Only proceed if we reached this state with strictly more energy
                if (nextEnergy > bestEnergy[nx][ny][nextMask]) {
                    bestEnergy[nx][ny][nextMask] = nextEnergy;
                    queue.offer(new int[]{nx, ny, nextMask, nextEnergy, steps + 1});
                }
            }
        }
        
        return -1;  
    }
}