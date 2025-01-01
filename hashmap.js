function hashObject(key, value, nextNode = null) {
    const getKey = () => key;
    const getValue = () => value;
    const getNextNode = () => nextNode;
    const setValue = (newValue) => {value = newValue};
    const setNextNode = (newNode) => {nextNode = newNode}

    return {getKey, getValue, getNextNode, setValue, setNextNode}
}

class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.storedKeys = 0;
        this.loadFactor = 0.75;
        this.capacity = this.buckets.length;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds.")
        }

        if (!this.buckets[key]) {
            const bucket = hashObject(key, value, null);
            bucket.append({ key, value })
            this.storedKeys += 1;
            this.buckets[index] = bucket;
        } else {
            const myList = this.buckets[index];
            const addSuccess = myList.append({ key, value });
            if (addSuccess) {
                this.storedKeys += 1;
            }
        }
    }
}

const test = new HashMap()
test.set('apple', 'red')