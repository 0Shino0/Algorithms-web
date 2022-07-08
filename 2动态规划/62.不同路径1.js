/* 
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

    问总共有多少条不同的路径？

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/unique-paths
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
/* 
    解释: 根据题意，
    易见：想要到达一个坐标如(i, j)，只能从(i-1, j)和(i, j-1)经过1Down or 1Right完成;
    因此，将原问题分解为分别经过坐标(i-1, j)和(i, j-1)的两个**独立子问题**，
    因此搜索空间从[(0, 0),(i, j)]化归为[(0, 0), (i-1, j)] 和[(0, 0), (i, j-1)]。
    很明显可以看出这两个搜索空间高度重合，因此使用自底向上的迭代法依次求解。
 */

    /* 
    动态规划五部曲
        确定dp数组（dp table）以及下标的含义
        dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。

    确定递推公式
        想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]。
        此时在回顾一下 dp[i - 1][j] 表示啥，是从(0, 0)的位置到(i - 1, j)有几条路径，dp[i][j - 1]同理。
        那么很自然，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，因为dp[i][j]只有这两个方向过来。

    dp数组的初始化
        如何初始化呢，首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理。
        所以初始化代码为：
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;

    确定遍历顺序
        这里要看一下递归公式dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，dp[i][j]都是从其上方和左方推导而来，那么从左到右一层一层遍历就可以了。
        这样就可以保证推导dp[i][j]的时候，dp[i - 1][j] 和 dp[i][j - 1]一定是有数值的。
    举例推导dp数组
    */
    let dp = new Array(m).fill().map(() => new Array(n).fill(1))
    console.log(dp);
    /*  
        m   n   路径
        i   j   路径
        1  ...  1
       ...  1   1
        2   2   2
        3   2   3
        2   3   3
        3   3   6
        3   4   
        4   3       
    */

    for(let i = 1; i< m; i++){
        for(let j = 1; j < n; j++){
            //  状态转移
            dp[i][j] = dp[i -1][j] + dp[i][j-1];
            console.log(i);
            console.log(j);
            console.log(dp[i][j]);
            // dp[m-1][n-1]

        }
    }
    console.log(dp);
    return dp[m-1][n-1]
    
};

uniquePaths(3,2)