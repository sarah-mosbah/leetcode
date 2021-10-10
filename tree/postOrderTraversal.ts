function postorderTraversal(root: TreeNode | null): number[] {
    let result = [];
      
      function traverse(root) {
          if(!root) return;
          let current = root;
          
          traverse(current.left);
          traverse(current.right);
          result.push(current.val);
          
       }
      
      traverse(root);  
      return result;
  };