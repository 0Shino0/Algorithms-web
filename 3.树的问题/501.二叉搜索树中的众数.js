/* 
给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 任意顺序 返回。

假定 BST 满足如下定义：

    结点左子树中所含节点的值 小于等于 当前节点的值
    结点右子树中所含节点的值 大于等于 当前节点的值
    左子树和右子树都是二叉搜索树

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
 * @return {number[]}
 */
var findMode = function (root) {
    /* 参考思路 
        由于是搜索二叉树，因此我们可以知道使用中序遍历，相同的数会连在一起，因此我们可以通过设置一个base记录上一次访问的节点值，baseCount记录上一次节点值出现的次数，maxCount记录最大出现次数，res记录结果集
    如果要考虑空间复杂度为O（1），可以使用morris遍历
    */
    let base, baseCount = 0, maxCount = 0, res = [];
    const update = node => {
        if (node.val === base) {
            ++baseCount;
        } else {
            base = node.val;
            baseCount = 1;
        }
        if (baseCount > maxCount) {
            res = [node.val];
            maxCount = baseCount;
        } else if (baseCount === maxCount && res.indexOf(node.val) === -1) {
            res.push(node.val);
        }
    }

    let pre = null, cur = root;
    while (cur) {
        // 如果没有左孩子，遍历当前节点，移动到右孩子
        if (cur.left === null) {
            update(cur);
            cur = cur.right;
            continue;
        }
        // 如果有左孩子
        pre = cur.left;
        // 一直往右走，找到当前节点的前驱节点
        while (pre && pre.right && pre.right !== cur) {
            pre = pre.right;
        }
        // 如果前驱节点为空
        if (pre.right === null) {
            pre.right = cur; // 设置前驱节点的右孩子为当前节点
            cur = cur.left; // 找前驱节点的时候，当前节点左移
        } else {
            pre.right = null; // 将当前节点恢复为空
            update(cur);
            cur = cur.right; // 遍历节点的时候，当前节点右移
        }
    }

    return res;
};