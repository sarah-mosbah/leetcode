import { TreeNode } from "../tree/Tree";

function sumOfLeftLeaves(root: TreeNode | null): number {
    
    const sumOfLeaves = (root: TreeNode | null, isLeft: boolean =false) => {
        if(!root) {
            return 0;
        }
        if(!root.left && !root.right && isLeft) {
            return root.value;
        } else if (!root.left && !root.right && !isLeft) {
            return 0;
        }
        
        const leftSubTree = sumOfLeaves(root.left, true);
        const rightSubTree = sumOfLeaves(root.right, false);
        return leftSubTree + rightSubTree;
    }
    
    return sumOfLeaves(root);
};