/* Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children. */



function minDepth(root: TreeNode | null): number {
  if(!root) return 0;
  let hightLeft =  minDepth(root.left);
  let hightRight= minDepth(root.right);

  if(!root.left) {
    return  1 + hightRight;
  }
  if(!root.right) {
    return  1 + hightLeft;
  }
  return Math.min(hightRight, hightLeft) + 1;
};