class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront() {
        if (this.head == null) return null

        const removedNode = this.head //si no esta vacio se guarda el nodo principal
        this.head = this.head.next // se actualiza el head al sgte nodo
        removedNode.next = null // se desconecta el nodo principal original
        return this.head
    }
    front() {
        let currentNode = this.head
        let currentValue = currentNode.value
        console.log(`current front value is ${currentValue}`)
    }
    contains(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value == value) {
                console.log("el valor se encuentra en la lista")
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }
    length() {
        let count = 0
        let currentNode = this.head
        while (currentNode) {
            count++
            currentNode = currentNode.next
        }
        console.log(`hay ${count} nodos`)
    }
    display() {
        let currentNode = this.head
        while (currentNode) {
            console.log(`el nodo es ${currentNode.value}`)
            currentNode = currentNode.next
        }
    }
}
const myList = new SLL()
myList.addFront(5)
myList.addFront(10)
myList.addFront(15)
myList.removeFront()
myList.front()
myList.contains(5)
myList.length()
myList.display()