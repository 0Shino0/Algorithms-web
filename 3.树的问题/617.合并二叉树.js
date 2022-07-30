/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    const dfs = (node1, node2) => {
        if (!node1) return node2;
        if (!node2) return node1;

        const node = new TreeNode(node1.val + node2.val);
        node.left = dfs(node1.left, node2.left);
        node.right = dfs(node1.right, node2.right);
        return node;
    }

    return dfs(root1, root2)
};