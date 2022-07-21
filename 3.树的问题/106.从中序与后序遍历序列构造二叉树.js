/* 
    给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    /* 
    参考思路：【利用后序和中序遍历的性质，递归建立一棵树】
    首先回顾一下中序遍历和后序遍历的特点：
    中序遍历-> 左 中 右
    后序遍历-> 左 右 中
    也就是说，后序遍历的最后一个节点为中间节点。而找到这个中间节点后，我们又可以利用中序遍历的性质，把中间节点的左子树和右子树给划分开。

    而对于子问题依然是这样一个过程。
    */
    let postIdx = postorder.length - 1; // 记录后续遍历中间节点位置
    const map = new Map(); // 记录中序遍历 value -> index 的索引
    const helper = (left, right) => {
        if (left > right) return null;

        const inIdx = map.get(postorder[postIdx]);
        const root = new TreeNode(inorder[inIdx]);

        --postIdx;

        root.right = helper(inIdx + 1, right);
        root.left = helper(left, inIdx - 1);

        return root;
    }

    inorder.forEach((val, idx) => {
        map.set(val, idx);
    })

    return helper(0, inorder.length - 1);
};