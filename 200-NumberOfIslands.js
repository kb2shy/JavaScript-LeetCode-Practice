const numIslands = (grid) => {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                result += 1;
                bfs(grid, i, j);
            }
        }
    }

    return result;
}

const bfs = (grid, x, y) => {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === '0') {
        return;
    }

    grid[x][y] = '0'
    bfs(grid, x + 1, y); // up
    bfs(grid, x - 1, y); // down
    bfs(grid, x, y + 1); // left
    bfs(grid, x, y - 1); // right
}

const grid1 = [
    ['1', '1','1','1','0'],
    ['1', '1','0','1','0'],
    ['1', '1','0','0','0'],
    ['0', '0','0','0','0'],
    ['0', '0','0','0','0'],
];

const grid2 = [
    ['1', '1','1','1','0'],
    ['1', '1','0','0','0'],
    ['1', '1','0','1','0'],
    ['0', '0','0','1','1'],
    ['0', '0','0','0','0'],
];

const grid3 = [
    ['0', '1','1','0','0'],
    ['1', '1','0','1','0'],
    ['1', '1','0','1','1'],
    ['0', '0','0','0','0'],
    ['0', '1','1','0','0'],
];

console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));