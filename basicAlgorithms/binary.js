class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinaryST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data); // if is a first node
      return;
    } else {
      const searchingTress = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchingTress(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchingTress(node.right);
          }
        } else {
          // if data is equal to node.data
          return;
        }
      };
      return searchingTress(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      // continue move to next left node
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findNode(data) {
    let current = this.root;
    while (current) {
      // when current is null, while condition will false => exit loop.
      if (current.data === data) {
        // node exist, stop searching.
        return;
      }
      if (current.data < data) {
        current = current.right;
      } else if (current.data > data) {
        current = current.left;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return true;
      }
      if (current.data < data) {
        current = current.right;
      } else if (current.data > data) {
        current = current.left;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // if node dont have left child and right child
        if (node.left === null && node.right === null) {
          return null;
        }

        //if node has left child
        if (node.left === null) {
          return node.right;
        }

        //if node has right child
        if (node.right === null) {
          return node.left;
        }
        //if node has two children, start form node.right then go to last left child node.
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}
var bir = new BinaryST();
bir.add(1);
bir.add(3);
bir.add(2);
bir.add(45);
bir.add(11);
bir.add(Math.random());
bir.add(Math.random());
bir.add(Math.random());
bir.add(Math.random());

console.log(bir);
console.log(bir.isPresent(1));
