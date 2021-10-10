export class Tree {
    public root: TreeNode;
    constructor() {
    }


    insertNode(value: number) {

        if(!this.root) {
            const rootNode = new TreeNode(value);
            this.root = rootNode;
            return;
        }
        let currentNode = this.root;
        while(true) {
            if(currentNode.value > value) {
                if(!currentNode.left) {
                    currentNode.left = new TreeNode(value);
                    break;
                }
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                if(!currentNode.right) {
                    currentNode.right = new TreeNode(value);
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    findNode(value: number) {
        if(!this.root) 
            return null;
        let current = this.root;
        while(current) {
            if(current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return current;
    }
}

export class TreeNode {
    public left: TreeNode;
    public right: TreeNode;
    public value: any;

    constructor(value: number) {
        this.value = value;
    }
}

const tree = new Tree();
tree.insertNode(4);
tree.insertNode(6);
tree.insertNode(-1);
tree.insertNode(-2);
tree.insertNode(3);
tree.insertNode(40);

console.log(tree.findNode(-20));