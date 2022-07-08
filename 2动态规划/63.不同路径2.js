/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/* 
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

    网格中的障碍物和空位置分别用 1 和 0 来表示。

*/

 var uniquePathsWithObstacles = function(obstacleGrid) {
    // 解题思路
    /* 
    动规五部曲：
        确定dp数组（dp table）以及下标的含义
            dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
        确定递推公式

            递推公式和62.不同路径一样，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]。

            但这里需要注意一点，因为有了障碍，(i, j)如果就是障碍的话应该就保持初始状态（初始状态为0）。

            所以代码为：

            if (obstacleGrid[i][j] == 0) { // 当(i, j)没有障碍的时候，再推导dp[i][j]
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }

        dp数组如何初始化

            在62.不同路径
            (opens new window)不同路径中我们给出如下的初始化：
            vector<vector<int>> dp(m, vector<int>(n, 0)); // 初始值为0
            for (int i = 0; i < m; i++) dp[i][0] = 1;
            for (int j = 0; j < n; j++) dp[0][j] = 1;
            因为从(0, 0)的位置到(i, 0)的路径只有一条，所以dp[i][0]一定为1，dp[0][j]也同理。
            但如果(i, 0) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。
            如图：
            63.不同路径II
            下标(0, j)的初始化情况同理。
            所以本题初始化代码为：
                vector<vector<int>> dp(m, vector<int>(n, 0));
                for (int i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
                for (int j = 0; j < n && obstacleGrid[0][j] == 0; j++) dp[0][j] = 1;
            注意代码里for循环的终止条件，一旦遇到obstacleGrid[i][0] == 1的情况就停止dp[i][0]的赋值1的操作，dp[0][j]同理

        确定遍历顺序
            从递归公式dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 中可以看出，一定是从左到右一层一层遍历，这样保证推导dp[i][j]的时候，dp[i - 1][j] 和 dp[i][j - 1]一定是有数值。
            代码如下：
            for (int i = 1; i < m; i++) {
                for (int j = 1; j < n; j++) {
                    if (obstacleGrid[i][j] == 1) continue;
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }   

        举例推导dp数组
    */
   let row = obstacleGrid.length;
   let column = obstacleGrid[row-1].length;

   let dp = new Array(row).fill().map(() => new Array(column).fill(0))

   dp[0][0] = obstacleGrid[0][0] ? 0:1; // 机器人

   for(let i = 1;i < row;i++){
       dp[i][0] = !obstacleGrid[i][0] && dp[i-1][0] ? 1 : 0;
   }
   for(let j = 1; j < column; j++){
       dp[0][j] = !obstacleGrid[0][j] && dp[0][j-1] ? 1 : 0;
   }
   for(let i = 1; i < row ; i++ ){ 
       for(let j = 1; j < column;j++){
           dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1];
       }
   }
//    console.log(dp[row - 1][column - 1]);
   return dp[row - 1][column - 1];

 /*  // 我的思路
   // 存储数组
    let arr = obstacleGrid;
    //  设置机器人的位置 和 星星的位置
    arr[0][0] = 2;
    arr[obstacleGrid.length-1][obstacleGrid[obstacleGrid.length-1].length-1] = -1;

    let index = 0
    if(0 === 1){
        index += (arr[0][1] === 0) ? 1 : 0;
        index += (arr[1][1] === 0) ? 1 : 0;
        index += (arr[1][0] === 0) ? 1 : 0;
    }

    for()
    console.log(index);
    // for(let i = 0;i<arr.length;i++){
    //     arr[0]
    // }
    return index; */

};

let obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
// obstacleGrid = [[0,1],[0,0]]

uniquePathsWithObstacles(obstacleGrid)