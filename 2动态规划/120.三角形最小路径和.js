/* 题目
    给定一个三角形 triangle ，找出自顶向下的最小路径和。

    每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/triangle
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    // 思路
    /* 
        参考思路：
                动态规划，子问题的最优解就是全局最优解
            1. 定义状态
                dp[i][j] 第i行第j个元素的最小路径和
            2. 状态转移
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
            3. 定义边界
                此题我们采取自底向上，初始dp值及为数组的值
    */
    if(triangle.length === 0) return 0;
    // 1. dp[i][j] 第i行第j个元素的最小路径和
    // 2. dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
    // 3. dp[0][0] = triangle[0][0];
    let column = triangle.length;
    let dp = JSON.parse(JSON.stringify(triangle)) // 不建议修改原始数据
    for (let i = column - 2; i >= 0;i--){
        for (let j = 0;j < triangle[i].length; j++){
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
            console.log(`dp[${i}][${j}]`,dp[i][j]);
        }
    }
    console.log(dp[0][0]);
    return dp[0][0];

};
let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

minimumTotal(triangle)

/* 
[
     [11]
    [9,10]
   [7,6,10]
]
*/