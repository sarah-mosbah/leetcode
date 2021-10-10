"use strict";
exports.__esModule = true;
exports.TreeNode = exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.insertNode = function (value) {
        if (!this.root) {
            var rootNode = new TreeNode(value);
            this.root = rootNode;
            return;
        }
        var currentNode = this.root;
        while (true) {
            if (currentNode.value > value) {
                if (!currentNode.left) {
                    currentNode.left = new TreeNode(value);
                    break;
                }
                currentNode = currentNode.left;
            }
            else if (currentNode.value < value) {
                if (!currentNode.right) {
                    currentNode.right = new TreeNode(value);
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    };
    Tree.prototype.findNode = function (value) {
        if (!this.root)
            return null;
        var current = this.root;
        while (current) {
            if (current.value > value) {
                current = current.left;
            }
            else if (current.value < value) {
                current = current.right;
            }
            else {
                return current;
            }
        }
        return current;
    };
    return Tree;
}());
exports.Tree = Tree;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var tree = new Tree();
tree.insertNode(4);
tree.insertNode(6);
tree.insertNode(-1);
tree.insertNode(-2);
tree.insertNode(3);
tree.insertNode(40);
console.log(tree.findNode(-20));
