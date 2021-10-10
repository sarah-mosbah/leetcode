
  // Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


function preorderTraversal(root: TreeNode | null): number[] {

    let result = [];
    
    function traverse(root) {
        if(!root) return;
        let current = root;
        result.push(current.val);
        traverse(current.left);
        traverse(current.right);
        
     }
    
    traverse(root);  
    return result;
};