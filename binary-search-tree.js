class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this; 
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
  
    function insertHelper(current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          insertHelper(current.left);
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          insertHelper(current.right);
        }
      }
    }
  
    if (!this.root) {
      this.root = newNode;
    } else {
      insertHelper(this.root);
    }
  
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
  
    while (current) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
  
    if (val === current.val) return current;
  
    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
  
    function traverse(node) {
      if (!node) return;
      visited.push(node.val);         // Visit current node
      traverse(node.left);            // Traverse left subtree
      traverse(node.right);           // Traverse right subtree
    }
  
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
  
    function traverse(node) {
      if (!node) return;
      traverse(node.left);           // Traverse left subtree
      visited.push(node.val);        // Visit current node
      traverse(node.right);          // Traverse right subtree
    }
  
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
  
    function traverse(node) {
      if (!node) return;
      traverse(node.left);            // Traverse left subtree
      traverse(node.right);           // Traverse right subtree
      visited.push(node.val);         // Visit current node
    }
  
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [];
  
    if (!this.root) return visited;
  
    queue.push(this.root);
  
    while (queue.length > 0) {
      const current = queue.shift();       // Remove the first node in the queue
      visited.push(current.val);           // Visit the node
  
      if (current.left) queue.push(current.left);   // Add left child to queue
      if (current.right) queue.push(current.right); // Add right child to queue
    }
  
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
