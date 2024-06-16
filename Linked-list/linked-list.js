class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  addNode(data){
    const newNode = new Node(data)
    if(this.head === null){
      this.head = newNode
    } else {
      let current = this.head
      while(current.next !== null){
        current = current.next
      }
      current.next = newNode
    }
  }

  deleteFrist(){
    if(this.head===null) return
    const deletedNode = this.head
    this.head = this.head.next
    deletedNode.next = null
    return deletedNode.data
  }

  show(){
    let current = this.head
    while(current !== null){
      console.log(current.data, '->')
      current = current.next
    }
  }
}

const linkedList = new LinkedList()

linkedList.addNode(1)
console.log(linkedList)

linkedList.addNode(2)
linkedList.addNode(3)
linkedList.addNode(4)
linkedList.addNode(5)
console.log(linkedList)

linkedList.deleteFrist()

linkedList.show()
