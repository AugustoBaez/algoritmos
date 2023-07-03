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
    max() {
        if (this.head == null) {
            return null
        }
        let currentNode = this.head
        let maxNode = currentNode
        while (currentNode) {
            if (currentNode.value > maxNode.value) {
                maxNode = currentNode
            }
            currentNode = currentNode.next
        }
        console.log("el valor maximo es: ", maxNode.value)
    }
    min() {
        if (this.head == null) {
            console.log("la lista esta vacia")
            return null
        }
        let currentNode = this.head
        let minNode = currentNode.value
        while (currentNode) {
            if (currentNode.value < minNode) {
                minNode = currentNode.value
            }
            currentNode = currentNode.next
        }
        console.log("el valor minimo es: ", minNode)
        return minNode
    }
    average() {
        if (this.head == null) {
            console.log("La lista está vacía.")
            return null
        }
        let nodeCount = null
        let currentNode = this.head
        let totalNodesValues = 0
        while (currentNode) {
            totalNodesValues += currentNode.value;
            nodeCount++
            currentNode = currentNode.next
        }
        let average = totalNodesValues / nodeCount
        console.log("el valor promedio es: ", average)
        return average
    }
    back() {
        if (this.head == null) {
            console.log("La lista está vacía.")
            return null
        }

        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        const lastValue = currentNode.value
        console.log("El último valor de la lista es:", lastValue)
        return lastValue
    }
    removeBack() {
        if (this.head == null) return null

        if (this.head.next == null) {
            this.head = null
            return this
        }

        let currentNode = this.head
        let previousNode = null

        while (currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null

        console.log("el ultimo nodo ha sido eliminado")
        return this
    }
    addBack(value) {
        if (this.head == null) {
            this.head == new Node(value)
        }

        let currentNode = this.head

        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = new Node(value)
        console.log("valor agregado al final de la lista")
        return this
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
/* myList.removeFront() */
myList.front()
/* myList.contains(5) */
myList.length()
/* myList.max()
myList.min()
myList.average() */
myList.back()
myList.removeBack()
myList.display()
myList.addBack(20)
myList.length()
myList.display()