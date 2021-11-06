import { TreeNode } from "../tree/Tree";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    
    if(!root) {
      return false;
   }
   if(!root.left && !root.right) return targetSum === root.value;

   return hasPathSum(root.left, targetSum - root.value) || hasPathSum(root.right, targetSum - root.value);
};