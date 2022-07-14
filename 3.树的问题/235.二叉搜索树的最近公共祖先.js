/* 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 由于是二叉搜索树，左子树小于当前节点，右子树大于当前节点。
    // 因此，我们可以使用2遍扫描，记录到达p节点和q节点的路径。
    // 这两条路径从顶点往下走，如果不相等的前一个节点，就是最近公共祖先
    /*     let moveNode = root;
        let res = null;
        const pPath = [], qPath = [];
        const move = (node, path, target) => {
            while (node !== null) {
                path.push(node);
                if (node.val === target.val) {
                    break;
                } else if (node.val > target.val) {
                    node = node.left;
                } else {
                    node = node.right;
                }
            }
        }
    
        // 递归调用
        move(moveNode, pPath, p);
    
        moveNode = root;
        move(moveNode, qPath, q);
    
        for (let i = 0; i < pPath.length; i++) {
            if (!pPath[i] || !qPath[i] || pPath[i].val !== qPath[i].val) return res;
            res = pPath;
        }
    
        return res; */

    // 迭代法
    // 使用迭代的方法
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        } else {
            return root;
        }

    }
    return null;
};