function averageOfLevels(root: TreeNode | null): number[] {

    if(!root) return [];
    let currentNode = root;
    const queue = [root];
    const answer: number[] = [];
   while(queue.length) {
       const size = queue.length;
       let accumlatedValue =0;
       for(let i=0; i < size; i++) {
          currentNode =  queue.shift();
          accumlatedValue += currentNode.val;
          if(currentNode.left) queue.push(currentNode.left) 
          if(currentNode.right) queue.push(currentNode.right) 
       }
       answer.push(accumlatedValue/size);
   }
   return answer;
};