/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // 思路
    // 1. dp[i][j]表示第i行第j个元素的最小路径和
    // 2. 状态转移：dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    // 3. 边界 第0行，和第0列

    // 初始化
    let dp = new Array(grid.length).fill().map(() => new Array());
    let row = grid.length;
    let column = grid[row - 1].length;
    dp[0][0] = grid[0][0];
    for (let i = 1; i < row; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < column; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    console.log(dp)
    return dp[row - 1][column - 1];
};

/* 
const min = (a, b) => {
    // 优化
    return a < b ? a : b;
}

var minPathSum = function(grid) {
    const m = grid.length;
    if (!m) return 0;
    const n = grid[0].length;
    const dp = new Array();
    for (let i = 0; i < m; ++i) {
        const temp = new Array();
        for (let j = 0; j < n; ++j) {
            temp.push(0)
        }
        dp.push(temp);
    }
    dp[m-1][n-1] = grid[m-1][n-1];
    for (let i = m - 2; i >= 0; --i) {
        dp[i][n-1] = grid[i][n-1] + dp[i+1][n-1];
    }
    for (let j = n - 2; j >= 0; --j) {
        dp[m-1][j] = grid[m-1][j] + dp[m-1][j+1];
    }
    for (let i = m - 2; i >= 0; --i) {
        for (let j = n - 2; j >= 0; --j) {
            dp[i][j] = min(dp[i+1][j], dp[i][j+1]) + grid[i][j];
        }
    }
    console.log(dp[0][0]);
    return dp[0][0];
}; */


let grid = [[1,2,3],[4,5,6]]
minPathSum(grid)
