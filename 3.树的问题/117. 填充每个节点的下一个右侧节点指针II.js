/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 给定一个二叉树
    struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
    }
    填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

    初始状态下，所有 next 指针都被设置为 NULL。

    进阶：
    你只能使用常量级额外空间。
    使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
    来源：力扣（LeetCode）
    链接：https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    // 思路 按行遍历，连接每一行的节点即可
    /*    if (!root) return null;
   
       const queue = [root];
       let cur;
       let level;
   
       while (queue.length) {
           level = queue.length;
           let i = 0;
           const temp = [];
   
           while (i++ < level) {
               cur = queue.shift();
   
               temp.push(cur);
   
               cur.left && queue.push(cur.left);
               cur.right && queue.push(cur.right);
           }
   
           temp.forEach((v, k) => {
               v.next = temp[k + 1] || null;
           });
       }
   
       return root; */


    if (!root) return null

    let q = [root]

    while (q.length) {

        let size = q.length, lastNode = null

        for (let i = 0; i < size; i++) {
            let node = q.shift()
            node.next = lastNode

            lastNode = node
            // 从右往左边遍历
            if (node.right) q.push(node.right)
            if (node.left) q.push(node.left)
        }
    }

    return root

};