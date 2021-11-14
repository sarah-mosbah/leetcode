function maxAreaOfIsland(grid: number[][]): number {

    let max = 0;
    
    
    function maxArea(grid: number[][], row: number, column:number) {
        if(row < 0 || row > grid.length -1|| column <0 || column > grid[0].length -1|| grid[row][column]=== 0) {
            return 0;
        }
        
        let count = 1;
        grid[row][column] = 0;
        
        count+= maxArea(grid, row+1, column);
        count+= maxArea(grid, row-1, column);
        count+= maxArea(grid, row, column+1);
        count+= maxArea(grid, row, column-1);
        
        return count;
    }
    
    
    for(let i =0; i<grid.length; i++) {
        for(let j =0; j<grid[i].length; j++) {
            max = Math.max(max, maxArea(grid, i, j))
        }
    }
    
    return max;
};