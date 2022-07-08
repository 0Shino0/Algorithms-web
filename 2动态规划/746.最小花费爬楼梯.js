/* 
    给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

    你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

    请你计算并返回达到楼梯顶部的最低花费。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/min-cost-climbing-stairs
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {

    // 题解 
        // 思路
    /* 
        由于每次可以走1步或者2步，因此到达第i阶梯它的最小花费依赖于第i-1步走1步到达，
        或者依赖于第i-2步走2步到达，动态规划三步曲：
            1. 定义状态
                dp[i] 表示到达第i个阶梯所需要的最小花费
            2. 状态转移
                dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
            3. 定义边界
                到达第1个阶梯和第2个阶梯，均可从原地直接走1步或2步到达
            dp[0] = dp[1] = 0
    */

    // dp[i] 代表到达第i个阶梯的最小花费 
    // dp[i] = Math.min(dp[i-1],ap[i-2]+cost[i])
    // dp[0] = 0    dp[1] = 0 
    let dp = [];
    dp[0] = dp[1] = 0;
    for(let i = 2; i<cost.length;i++){
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[cost.length]

    

/*  // 我的思路
    let sumCost = 0;
    let newArr = []; // 标记数组

    // cost.forEach(function(currentValue,index,arr){
    // })

    for(let i = 0;i < cost.length;i++){

        if((i+1) > (i+2)){
            newArr.push(cost[i+2])
            // console.log(1);
        }else{
            newArr.push(cost[i+1])
            // console.log(2);
        }
        if(i+2 === (cost.length-1)) break;
    }
    // console.log(newArr);
    newArr.forEach(function(currentValue){
        sumCost += currentValue;
    })
    console.log(sumCost);
    return sumCost;
 */

};

let number = [10,15,20]
minCostClimbingStairs(number)