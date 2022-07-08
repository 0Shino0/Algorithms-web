/* 
    给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

    子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/longest-increasing-subsequence
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    /* 
     参考思路：
        动态规划三步曲：
        1. 定位状态
            dp[i]表示以第i个数结尾的最长上升子序列
        2. 状态转移
            dp[i]的值取决于，Math.max(从0->i位置上所有第i个数小的数的最长上升子序列之和+1)
            dp[i] = Math.max(dp[i], dp[j] + 1); // 0 <= j < i
        3. 定义边界
            第一个元素无前面的元素，自身就是一个最长上升子序列，dp[0] = 1
    */
    // dp[i] i表示以当前数结尾的最长上升子序列
    // dp[i] = Math.max(0 -> i dp[i]) + 1;
    // dp[0] = 1;

    // 方法 1.2
    if(nums.length <= 1){
        return nums.length;
    }
    let n = nums.length;
    let maxLength = 0;
    let dp = [];
    dp[0] = 1;
    for(let i = 1;i<n;i++){
        let max = 0;
        for(let j = i-1; j >= 0 ;j--){
            if(nums[j] < nums[i]){
                 max = Math.max(dp[j],max);
            }
        }  
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    }
    console.log(maxLength);
    return maxLength;


    // 方法二
 /*    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        var left = 0, right = ans.length;
        while (left < right) { //二分法
            var mid = left + right >>> 1;
            if (ans[mid] < nums[i]) left = mid + 1;
            else right = mid;
        } 
        if (right >= ans.length) ans.push(nums[i]); //如果找不到 在ans最后增加一项nums[i]
        else ans[right] = nums[i];
    }
    console.log(ans.length);
    return ans.length; */
};

let res = [10,9,2,5,3,7,101,18]
lengthOfLIS(res)