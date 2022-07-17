/* 
    给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

    叶子节点 是指没有子节点的节点。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/path-sum-ii
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    // 参考思路：【递归+回溯】
    // 递归遍历搜集符合条件的节点，用回溯的办法
    const res = []
    const dfs = (node, target, path) => {
        if (node === null) return;

        path.push(node.val);

        if (node.left === null && node.right === null) {
            if (node.val === target) {
                res.push([...path])
            }
        }

        dfs(node.left, target - node.val, path)
        dfs(node.right, target - node.val, path)

        path.pop();
    }
    dfs(root, targetSum, [])
    return res;
};

// 其他方法
/* var pathSum = function(root, sum) {
    let arr = [];
    let path = [];
    dfs(root,  path, arr, sum);
    return arr;
};

function dfs(root, path, arr, sum) {
    if(!root) return;
    path.push(root.val);
    if(root.val == sum && root.left == null && root.right == null) {
        arr.push([...path]);
    }
    dfs(root.left, path, arr, sum - root.val);
    dfs(root.right, path, arr, sum - root.val);
    path.pop();
} */