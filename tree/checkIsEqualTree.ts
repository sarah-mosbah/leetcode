import {TreeNode} from '../tree/Tree';
 

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q) {
        return true;
    }
    if(p && q) {
        return p.value === q.value && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;

};