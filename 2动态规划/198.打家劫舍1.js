/* 
    你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

    给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/house-robber
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    // 动态规划
    /*      五部曲
        确定dp数组（dp table）以及下标的含义
            dp[i]：考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]。

        确定递推公式
            决定dp[i]的因素就是第i房间偷还是不偷。

            如果偷第i房间，那么dp[i] = dp[i - 2] + nums[i] ，即：第i-1房一定是不考虑的，找出 下标i-2（包括i-2）以内的房屋，最多可以偷窃的金额为dp[i-2] 加上第i房间偷到的钱。

            如果不偷第i房间，那么dp[i] = dp[i - 1]，即考虑i-1房，（注意这里是考虑，并不是一定要偷i-1房，这是很多同学容易混淆的点）

            然后dp[i]取最大值，即dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);

        dp数组如何初始化
            从递推公式dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);可以看出，递推公式的基础就是dp[0] 和 dp[1]

            从dp[i]的定义上来讲，dp[0] 一定是 nums[0]，dp[1]就是nums[0]和nums[1]的最大值即：dp[1] = max(nums[0], nums[1]);

        代码如下：

            vector<int> dp(nums.size());
            dp[0] = nums[0];
            dp[1] = max(nums[0], nums[1]);
            确定遍历顺序
            dp[i] 是根据dp[i - 2] 和 dp[i - 1] 推导出来的，那么一定是从前到后遍历！

        代码如下：

            for (int i = 2; i < nums.size(); i++) {
                dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
            }
        举例推导dp数组
            以示例二，输入[2,7,9,3,1]为例。
    */
    let len = nums.length;
    if (len === 0 || nums === null) return 0;
    if (len === 1) return nums[0];

    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    // nums.forEach((value,i) => {
    //     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    // })
    console.log(dp[dp.length-1]);
    return dp[dp.length-1]
    
    // 奇数偶数
// 我的思路
// 未考虑 跨俩以上的情况
    // let dp1 = 0;
    // let dp2 = 0;
    // nums.forEach((currentvalue,index,arr) => {
    //     if(index%2 === 0){ // 偶数
    //         dp2 += currentvalue
    //     }else{
    //         dp1 += currentvalue
    //     }
    // })
    // console.log((dp1 > dp2? dp1 : dp2));
    // return (dp1 > dp2? dp1 : dp2)
};

rob([1,2,3,1])
rob([2,1,1,2])