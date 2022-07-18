/* 
    给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    /* 
    参考思路：【利用前序遍历和中序遍历的特点，递归建树】
    这道题的思路和利用中序和后序建树的思路一样
    前序遍历的过程：中 左 右
    中序遍历的过程：左 中 右
    因此，我们通过前序遍历可以获取到中间节点，然后在中序遍历中找到左子树和右子树。
    重复这个过程。
    和后序中序建树不同的是，前序遍历是先中间节点完事了，先左后右，因此我们在利用前序遍历建树的时候，也是先建立左子树，
    在建立右子树【这一点和后序遍历先建立右子树，其次建立左子树正好相反】
    */
    let preIdx = 0;
    const map = new Map();
    const helper = (left, right) => {
        if (left > right) return null;

        const inIdx = map.get(preorder[preIdx]);
        const root = new TreeNode(inorder[inIdx]);

        ++preIdx;

        root.left = helper(left, inIdx - 1);
        root.right = helper(inIdx + 1, right);

        return root;
    }

    inorder.forEach((val, index) => {
        map.set(val, index);
    });

    return helper(0, inorder.length - 1);
};

/*  
// 其他方法
// 1.前序遍历的第一个元素一定是根节点，这里是3
// 2.中序遍历中3的左侧元素[9],[15,20,7] 分别是 根节点3的左子树和右子树
// 3.前序遍历数组去掉根节点之后[9,20,15,7] 按照长度截取 左子树和右子树的前序遍历
// 4.递归左子树和右子树的两种遍历（注意：前序排列是去掉了根节点，计算右子树中序遍历时index+1）

function TreeNode(val) {
    this.val=val;
    this.left=this.right=null;
}
var buildTree = function(preorder, inorder) {
    if(preorder.length){
        let head = new TreeNode(preorder.shift())
        let index = inorder.indexOf(head.val);
        head.left=buildTree(
            preorder.slice(0,index),
            inorder.slice(0,index)
        )
        head.right = buildTree(
            preorder.slice(index),
            inorder.slice(index+1)
        )
        return head;
    }else{
        return null;
    }
};

作者：ityou-o
链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/javascriptban-jie-ti-si-lu-by-ityou-o-58cj/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/