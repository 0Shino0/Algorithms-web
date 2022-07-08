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
 * @return {number}
 */
//  var rob = function(root) {
//     // 解题思路 1
//     /* 
//     在上面两种方法，其实对一个节点 偷与不偷得到的最大金钱都没有做记录，而是需要实时计算。

//     而动态规划其实就是使用状态转移容器来记录状态的变化，这里可以使用一个长度为2的数组，记录当前节点偷与不偷所得到的的最大金钱。

//     这道题目算是树形dp的入门题目，因为是在树上进行状态转移，我们在讲解二叉树的时候说过递归三部曲，那么下面我以递归三部曲为框架，其中融合动规五部曲的内容来进行讲解。

//     1. 确定递归函数的参数和返回值
//         这里我们要求一个节点 偷与不偷的两个状态所得到的金钱，那么返回值就是一个长度为2的数组。

//         参数为当前节点，代码如下：

//         vector<int> robTree(TreeNode* cur) {
//         其实这里的返回数组就是dp数组。

//         所以dp数组（dp table）以及下标的含义：下标为0记录不偷该节点所得到的的最大金钱，下标为1记录偷该节点所得到的的最大金钱。

//         所以本题dp数组就是一个长度为2的数组！

//         那么有同学可能疑惑，长度为2的数组怎么标记树中每个节点的状态呢？

//         别忘了在递归的过程中，系统栈会保存每一层递归的参数。

//         如果还不理解的话，就接着往下看，看到代码就理解了哈。

//     2.确定终止条件
//         在遍历的过程中，如果遇到空节点的话，很明显，无论偷还是不偷都是0，所以就返回

//         if (cur == NULL) return vector<int>{0, 0};
//         这也相当于dp数组的初始化

//     3.确定遍历顺序
//         首先明确的是使用后序遍历。 因为通过递归函数的返回值来做下一步计算。

//         通过递归左节点，得到左节点偷与不偷的金钱。

//         通过递归右节点，得到右节点偷与不偷的金钱。

//         代码如下：

//         // 下标0：不偷，下标1：偷
//         vector<int> left = robTree(cur->left); // 左
//         vector<int> right = robTree(cur->right); // 右
//         // 中

//     4.确定单层递归的逻辑
//         如果是偷当前节点，那么左右孩子就不能偷，val1 = cur->val + left[0] + right[0]; （如果对下标含义不理解就在回顾一下dp数组的含义）

//         如果不偷当前节点，那么左右孩子就可以偷，至于到底偷不偷一定是选一个最大的，所以：val2 = max(left[0], left[1]) + max(right[0], right[1]);

//         最后当前节点的状态就是{val2, val1}; 即：{不偷当前节点得到的最大金钱，偷当前节点得到的最大金钱}

//         代码如下：

//         vector<int> left = robTree(cur->left); // 左
//         vector<int> right = robTree(cur->right); // 右

//         // 偷cur
//         int val1 = cur->val + left[0] + right[0];
//         // 不偷cur
//         int val2 = max(left[0], left[1]) + max(right[0], right[1]);
//         return {val2, val1};
//     5.举例推导dp数组
//         以示例1为例，dp数组状态如下：（注意用后序遍历的方式推导）

//         337.打家劫舍III

//         最后头结点就是 取下标0 和 下标1的最大值就是偷得的最大金钱。
//     */
    

//     // 解题思路2
//     /* 
//     对于每个节点，我们有两种策略，选择或者不选择。假设selectedMap(node)表示选择当前节点的最大权值和，ignoreMap(node)表示不选择当前节点的最大权值和，l和r代表左右子树，则：
//     ● 如果选择当前节点，则当前节点的最大权值和=node.val+ignoreMap(l)+ignoreMap(r)
//     ● 如果不选择当前节点，则当前节点的最大权值和=Math.max(selectedMap(l), ignoreMap(l)) + Math.max(selectedMap(r), ignoreMap(r)) 
//     */
    
//     const selecteMap = new Map() // 选中当前节点
//     const ignoreMap = new Map() // 不选中当前节点

//     const dfs = (node) => {
//         if(node === null) return

//         dfs(node.left)
//         dfs(node.right)
//         selecteMap.set(
//             node,
//             node.val + (ignoreMap.get(node.left) || 0) + (ignoreMap.get(node.right) || 0)
//         )
//         ignoreMap.set(
//             node,
//             Math.max(
//                 selecteMap.get(node.left) || 0,
//                 ignoreMap.get(node.left) || 0,
//             ) + 
//             Math.max(
//                 selecteMap.get(node.right) || 0,
//                 ignoreMap.get(node.right) || 0
//             )
//         )
//     }
//     dfs(root)

//     return Math.max(selecteMap.get(root) || 0,ignoreMap.get(root) || 0)

// };

// let root = new Map(3,4,5,1,3,null,1)
// rob(root)


var rob = function(root) {
    // 优化版本
    let res = dfs(root);
    return Math.max(res[0], res[1]);
};

function dfs(root) {
    // res[0]表示不包括根节点的最大值，res[1]为包含根节点的最大值
    let res = [0,0];
    if (root === null) return res;
    let left = dfs(root.left);
    let right = dfs(root.right);
    // 不包含根节点的最大值为左子树最大值加右子树最大值
    res[0] = Math.max(...left) + Math.max(...right);
    // 包含根节点的最大值为当前节点值加左子树包含根节点的值加右子树包含根节点的值
    res[1] = root.val + left[0] + right[0];
    return res;
}