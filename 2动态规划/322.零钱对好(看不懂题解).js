/* 
    给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

    计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

    你可以认为每种硬币的数量是无限的。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/coin-change
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {

    // 题解思路之一  (背包的动态规划)
        //     1. 定义状态
            // dp[i] 表示第金额为i时的最低硬币个数
        // 2. 状态转移
        // // 以示例1来说  (coins = [1, 2, 5], amount = 11)
            // dp[i] = Math.min(dp[i - 1], dp[i - 2], dp[i - 5]) + 1
        // 3. 定义边界
            // 对于金额0，dp[0]=0，对于硬币面额所需要的最少硬币数均为1，其他面额均初始化为当前需要凑的数+1

    // fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
    // dp数组中全部填充 amount+1
    let dp = new Array(amount+1).fill(amount + 1);
    // 遍历coins 将 dp[coins[0......coins.length-1]] 全部设置为 1
    coins.forEach(coin => dp[coin] = 1)
    console.log(dp);
    dp[0] = 0;
    // 遍历 背包
    for(let i = 1;i <= amount; i++){    // 遍历 amount
        for(let j = 0;j < coins.length; j++){  // 遍历数组 coins[j] 
            if(coins[j] <= i) { // 如果 coin[j] 
                dp[i] = Math.min(dp[i],dp[i- coins[j]] + 1)
                console.log(dp);
            }
        }
    }
    console.log(dp);
    return dp[amount] > amount ? -1 : dp[amount];


    // 我的
/*     let arr = coins;
    let num = amount;
    // console.log(num);
    for(var i = 0 ; i < coins.length ; i++){
        // console.log(-2);
            //                      最少硬币个数
            // 2 5         6 7 11         -1.2.3
       
       if(num-coins[0] < 0) coins[0] = 0;
       if(num-coins[1] < 0) coins[1] = 0;
       if(num-coins[2] < 0) coins[2] = 0;
        num =  Math.min(num-coins[0],num-coins[1],num-coins[2])

        // console.log(num);
    }
    console.log(i);
    return i;
 */

};

let coins = [1, 2, 5]
let amount = 11

// coins = [2]
// amount = 3
coinChange(coins,amount)
console.log(coinChange(coins,amount));
