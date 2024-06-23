class TreeNode{
  value: number
  left: TreeNode | null
  right: TreeNode | null
  
  constructor(value: number){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  root: TreeNode | null

  constructor(){
    this.root = null
  }

  insert(value: number): void{
    const newNode = new TreeNode(value);
    if(this.root == null){
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode){
    if(newNode.value < node.value){
      if(node.left === null){
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null){
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  inOrderTraversal(node: TreeNode | null = this.root): void{
    if(node !== null){
      this.inOrderTraversal(node.left)
      console.log(node.value)
      this.inOrderTraversal(node.right)
    }
  }

  preOrderTraversal(node: TreeNode | null = this.root): void{
    if(node !== null){
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node: TreeNode | null = this.root): void {
    if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }
  }

}

const tree = new BinaryTree()
tree.insert(7)
tree.insert(4)
tree.insert(2)
tree.insert(5)
tree.insert(6)
tree.insert(1)
tree.insert(3)

console.log('Pre-order Traversal')
tree.preOrderTraversal()

console.log('In-order Traversal')
tree.inOrderTraversal()

console.log('Post-order Traversal')
tree.postOrderTraversal()


const tree2 = new BinaryTree()
tree2.insert(7)
tree2.insert(4)
tree2.insert(2)
tree2.insert(5)
tree2.insert(6)
tree2.insert(1)
tree2.insert(3)

console.log(tree == tree2)