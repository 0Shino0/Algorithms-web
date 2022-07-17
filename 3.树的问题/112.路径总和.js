/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 
 * 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
    叶子节点 是指没有子节点的节点。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/path-sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // 思路 —— 递归
    // 递归遍历每个节点，每个节点存在以下可能
    //      ● 当前节点为空，则return false
    //      ● 当前节点的左右孩子为空，已经到达叶子节点，return target === node.val
    //      ● 递归当前节点的左孩子和右孩子
    const dfs = (node, target) => {
        if (node === null) return false
        if (node.left === null && node.right === null) return node.val === target
        return dfs(node.left, target - node.val) || dfs(node.right, target - node.val)
    }
    return dfs(root, targetSum)
};