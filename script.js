const node1 = {
    prev: null,
    next: null,
    data: "A"
}

const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "E"
}

const nodo4 = {
    prev: node3,
    next: null,
    data: "N"
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    addFirst(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    addLast(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    get(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) {
                return currentNode;
            }

            currentNode = currentNode.next;
            currentIndex++;
        }

        return null;
    }

    indexOf(data) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (currentNode.data === data) {
                return index;
            }

            currentNode = currentNode.next;
            index++;
        }

        return -1;
    }

    insertAfter(index, newNode) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) {
                if (currentNode === this.tail) {
                    this.addLast(newNode.data);
                } else {
                    newNode.prev = currentNode;
                    newNode.next = currentNode.next;
                    currentNode.next.prev = newNode;
                    currentNode.next = newNode;
                }
                return;
            }

            currentNode = currentNode.next;
            currentIndex++;
        }

        this.add(newNode.data);
    }

    insertBefore(index, newNode) {
        if (index === 0) {
            this.addFirst(newNode.data);
            return;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) {
                newNode.next = currentNode;
                newNode.prev = currentNode.prev;
                currentNode.prev.next = newNode;
                currentNode.prev = newNode;
                return;
            }

            currentNode = currentNode.next;
            currentIndex++;
        }

        this.addLast(newNode.data);
    }

    first() {
        return this.head;
    }

    last() {
        return this.tail;
    }

    remove(index) {
        if (index === 0) {
          return this.removeFirst();
        }
    
        let currentNode = this.head;
        let currentIndex = 0;
    
        while (currentNode) {
          if (currentIndex === index) {
            if (currentNode === this.tail) {
              return this.removeLast();
            } else {
              const prevNode = currentNode.prev;
              const nextNode = currentNode.next;
              prevNode.next = nextNode;
              nextNode.prev = prevNode;
              return currentNode;
            }
          }
    
          currentNode = currentNode.next;
          currentIndex++;
        }
    
        return null;
      }

    removeLast() {
        if (!this.tail) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        const prevNode = this.tail.prev;
        prevNode.next = null;
        this.tail = prevNode;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        const nextNode = this.head.next;
        nextNode.prev = null;
        this.head = nextNode;
    }

    removeNode(data) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === data) {

                if (this.head === currentNode && this.tail === currentNode) {
                    this.head = null;
                    this.tail = null;
                } else if (this.head === currentNode) {
                    this.head = currentNode.next;
                    this.head.prev = null;
                } else if (this.tail === currentNode) {
                    this.tail = currentNode.prev;
                    this.tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }

                return;
            }
            currentNode = currentNode.next;
        }
    }

    insertBeforeNode(data, targetData) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === targetData) {

                if (this.head === currentNode) {
                    this.head.prev = newNode;
                    newNode.next = this.head;
                    this.head = newNode;
                } else {
                    newNode.prev = currentNode.prev;
                    newNode.next = currentNode;
                    currentNode.prev.next = newNode;
                    currentNode.prev = newNode;
                }

                return;
            }
            currentNode = currentNode.next;
        }
    }

    insertAfterNode(data, targetData) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === targetData) {

                if (this.tail === currentNode) {
                    this.tail.next = newNode;
                    newNode.prev = this.tail;
                    this.tail = newNode;
                } else {
                    newNode.prev = currentNode;
                    newNode.next = currentNode.next;
                    currentNode.next.prev = newNode;
                    currentNode.next = newNode;
                }

                return;
            }
            currentNode = currentNode.next;
        }
    }

    swapNodes(data1, data2) {
        if (data1 === data2) {
            return;
        }

        let currentNode = this.head;
        let node1 = null;
        let node2 = null;

        while (currentNode) {
            if (currentNode.data === data1) {
                node1 = currentNode;
            } else if (currentNode.data === data2) {
                node2 = currentNode;
            }

            currentNode = currentNode.next;
        }

        if (!node1 || !node2) {
            return;
        }

        const temp = node1.data;
        node1.data = node2.data;
        node2.data = temp;
    }

    nodeAt(data) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (currentNode.data === data) {
                return index;
            }

            currentNode = currentNode.next;
            index++;
        }

        return -1;
    }

    dumpList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(`
          node: ${currentNode.data}
          -----------
          prev: ${currentNode.prev ? currentNode.prev.data : null}
          next: ${currentNode.next ? currentNode.next.data : null}
        `);
            currentNode = currentNode.next;
        }
    }
}

const ll = new LinkedList();
ll.add("A");
ll.add("B");
ll.add("E");
ll.dumpList();