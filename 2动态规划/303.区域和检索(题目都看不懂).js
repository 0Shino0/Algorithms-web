/* 
    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/range-sum-query-immutable
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

    提示：

        1 <= nums.length <= 104
        -105 <= nums[i] <= 105
        0 <= i <= j < nums.length
        最多调用 104 次 sumRange 方法
    
    给定一个整数数组  nums，处理以下类型的多个查询:
    计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right

    实现 NumArray 类：

        NumArray(int[] nums) 使用数组 nums 初始化对象
        int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
*/

// 思路 https://www.yuque.com/morris-dlhjm/nnaevm/eabv7x
// 官方题解 https://leetcode.cn/problems/range-sum-query-immutable/solution/qu-yu-he-jian-suo-shu-zu-bu-ke-bian-by-l-px41/


// 用普通话来说    给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
/* 
示例：
    给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
    sumRange(0, 2) -> 1
    sumRange(2, 5) -> -1
    sumRange(0, 5) -> -3

说明:
    你可以假设数组不可变。会多次调用 sumRange 方法。
参考思路：
    我们用前置数组保存连续和，例如[-2, 0, 3, -5, 2, -1]
    前置数组为[0, -2, -2, 1,  -4, -2, -3]  第i项表示第0 -> i-1项的和
*/

/**
 * @param {number[]} nums
 */
// 用前置数组 prevNum 保存连续和
var NumArray = function (nums) {
    this.prevNum = [0] // 前序，和第一个元素的前序和为0
    nums.forEach(val => { 
        // forEach 遍历nums 数组. 
            // val :为当前数组元素
            // this.prevNum.length - 1 : prevNum的最后一个元素的索引
            // this.prevNum[this.prevNum.length - 1] : prevNum的最后一个元素
            // val + this.prevNum[this.prevNum.length - 1] : 
        // console.log(val);
        // console.log(this.prevNum[this.prevNum.length - 1]);
        this.prevNum.push(val + this.prevNum[this.prevNum.length - 1])
        // 在 prevNum 之后插入 val + this.prevNum[this.prevNum.length - 1]
        // console.log(this.prevNum);

    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    // 返回 前置数组的 最后一个元素 ==> nums的连续和 的差 ==> 
    // console.log(this.prevNum[i]);
    // console.log(this.prevNum[j + 1]);
    return this.prevNum[j + 1] - this.prevNum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
 var nums = [-2, 0, 3, -5, 2, -1]
 var obj = new NumArray(nums)
 var param_1 = obj.sumRange(0,nums.length-1)    // sumRange(0,5)