import {TreeNode} from '../tree/Tree';
export function isValidBST(root: TreeNode | null): boolean {
    
    function isValid(root: TreeNode | null, min: number, max: number) {
        if(!root) {
            return true;
        } 
        
        if(root.value < min || root.value > max) {
            return false;
        }
        
        return isValid(root.left, min, root.value - 1) && isValid(root.right, root.value+1, max);
    }
    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    
};