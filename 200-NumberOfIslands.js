// const numIslands = (grid) => {
//     let result = 0;

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === '1') {
//                 result += 1;
//                 bfs(i, j);
//             }
//         }
//     }

//     function bfs(i, j) {
//         if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
//             return;
//         }

//         grid[i][j] = '0';
//         bfs(i + 1, j); // up
//         bfs(i - 1, j); // down
//         bfs(i, j + 1); // left
//         bfs(i, j - 1); // right
//     }

//     return result;
// }

// 48 ms submission
const numIslands = (grid) => {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    let numIslands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                dfs(i, j);
            }
        }
    }

    return numIslands;
}

// const bfs = (grid, x, y) => {
//     if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === '0') {
//         return;
//     }

//     grid[x][y] = '0'
//     bfs(grid, x + 1, y); // up
//     bfs(grid, x - 1, y); // down
//     bfs(grid, x, y + 1); // left
//     bfs(grid, x, y - 1); // right
// }

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