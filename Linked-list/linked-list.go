package main

import "fmt"

type Node struct {
	data int
	next *Node
}

type LinkedList struct {
	head *Node
}

func main() {
	ll := LinkedList{}
	ll.addNode(1)
	ll.addNode(2)
	ll.addNode(3)
	ll.addNode(4)
	ll.addNode(5)
	ll.addNode(6)

	ll.show()
}

func (ll *LinkedList) addNode(data int) {
	newNode := &Node{data: data, next: nil}
	if ll.head == nil {
		ll.head = newNode
	} else {
		current := ll.head
		for current.next != nil {
			current = current.next
		}
		current.next = newNode
	}
}

func (ll *LinkedList) removeFirst() int {
	if ll.head == nil {
		return 0
	}
	deletedNode := ll.head
	ll.head = ll.head.next
	deletedNode.next = nil
	return deletedNode.data
}

func (ll *LinkedList) show() {
	current := ll.head
	for current != nil {
		fmt.Print(current.data, " -> ")
		current = current.next
	}
	fmt.Println("nil")
}
