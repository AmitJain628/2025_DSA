function kthSmallest(root, k) {
    let smallestNode = null;
    const smallest = (node) => {
         if(!node || smallestNode !== null) return;

         smallest(node.left);

         if(k-- === 1) {
            smallestNode = node;
            return;
         }

         smallest(node.right);
    }

    smallest(root);

    return smallestNode?.val;
}