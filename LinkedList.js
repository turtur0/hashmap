let LinkedList = () => {
    head: null;

    let append = (value) => {
        let newNode = Node(value);

        //If head is null, then newNode will be head
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        //If head isn't null, than search for tail and set newNode as tail
        let tail = this.head;
        while (tail.nextNode !== null) {
            tail = tail.nextNode;
        }

        tail.nextNode = newNode;
        return;
    }

    let prepend = (value) => {
        let newNode = Node(value);

        //If there is a current head, make newNode head and current head it's next node
        if (this.head !== null) {
            let currentHead = this.head;
            this.head = newNode;
            this.head.nextNode = currentHead;
            return;
        }

        this.head = newNode;
        return;
    }

    let size = () => {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            counter += 1;
            currentNode = currentNode.nextNode;
        }
        return counter;

    }

    let findHead = () => {
        return this.head;
    }

    let tail = () => {
        let tail = this.head;
        while (tail.nextNode !== null) {
            tail = tail.nextNode;
        }
        return tail;
    }

    let at = (index) => {
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    let pop = () => {
        let tail = this.head;
        while (tail.nextNode.nextNode !== null) {
            tail = tail.nextNode;
        }
        tail.nextNode = null;
    }

    let contains = (value) => {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    let find = (value) => {
        let currentNode = this.head;
        let counter = 0

        while (currentNode !== null) {
            if (currentNode.value === value) {
                counter += 1;
                return counter;
            }
            counter += 1;
            currentNode = currentNode.nextNode;
        }
        return 'Not in list';
    }

    let toString = () => {
        let currentNode = this.head;
        let string = "";

        while (currentNode !== null) {
            string += `${currentNode.value} -> `;
            currentNode = currentNode.nextNode;
        }
        return (string += 'null');
    }

    let insertAt = (value, index) => {
        if (this.head === null || index === 0) {
            prepend(value);
            return;
        }

        let currentNode = this.head;
        let i = 0;

        while (i < (index - 1)) {
            if (currentNode.nextNode === null) {
                return;
            }
            currentNode = currentNode.nextNode;
            i += 1;
        }

        let newNode = Node(value);
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
    }

    let removeAt = (index) => {
        if (this.head === null) return;
        let currentNode = this.head;
        let previousNode = null;
        let i = 0;

        if (index === 0) {
            this.head = currentNode.nextNode;
            return;
        }

        while (i < index) {
            if (currentNode.nextNode === null) return;
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            i += 1;
        }
        previousNode.nextNode = currentNode.nextNode;
    }

    return {
        append,
        prepend,
        size,
        findHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

let Node = (input) => {
    let value = input || null;
    let nextNode = null;

    return {
        value,
        nextNode
    };
}


let linkedList = LinkedList();

export { LinkedList }