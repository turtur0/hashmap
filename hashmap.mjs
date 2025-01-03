function hashObject(key, value, nextNode = null) {
    const getKey = () => key;
    const getValue = () => value;
    const getNextNode = () => nextNode;
    const setValue = (newValue) => { value = newValue };
    const setNextNode = (newNode) => { nextNode = newNode }

    return { getKey, getValue, getNextNode, setValue, setNextNode }
}

class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.storedKeys = 0;
        this.loadFactor = 0.75;
        this.capacity = this.buckets.length;
    }

    testIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds.")
        }
    }

    // Check if bucket growth is required 
    checkIfGrowth() {
        return this.storedKeys > (this.loadFactor * this.capacity)
    }

    // Double bucket capacity
    growth() {
        const myEntries = this.entries();
        this.buckets = new Array(this.capacity * 2);
        this.capacity = this.buckets.length;
        this.storedKeys = 0;

        myEntries.forEach((pair) => {
            this.set(pair[0], pair[1])
        })
    }

    // Hashing the key function
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity
        }

        return hashCode;
    }

    // Add a new value with a key
    set(key, value) {
        const index = this.hash(key);

        this.testIndex(index)

        if (!this.buckets[key]) {
            const bucket = hashObject(key, value, null);
            this.storedKeys += 1;
            this.buckets[index] = bucket;

            if (this.checkIfGrowth()) {
                this.growth()
            }

        } else {
            const myList = this.buckets[index];
            const addSuccess = myList.append({ key, value });
            if (addSuccess) {
                this.storedKeys += 1;
            }


            if (this.checkIfGrowth()) {
                this.growth()
            }
        }
    }

    // Get the value with key
    get(key) {
        const index = this.hash(key);
        this.testIndex(index);

        if (!this.buckets[index]) {
            return null;
        } else {
            return this.buckets[index].getValue(key);
        }
    }

    // Remove value with key
    remove(key) {
        const index = this.hash(key);
        this.testIndex(index)

        if (!this.buckets[index]) {
            return false;
        } else {
            this.buckets.splice(this.buckets.indexOf(index), 1)
            this.buckets[index] = this.buckets[index].getNextNode()
            this.storedKeys -= 1;
            return true
        }
    }

    // Return the number of keys
    length() {
        return this.storedKeys
    }

    // Clear all the values and keys from the bucket
    clear() {
        this.buckets = new Array(16);
        this.storedKeys = 0;
        this.loadFactor = 0.75;
        this.capacity = this.buckets.length;
    }

    // Return all the keys in an array
    keys() {
        let arr = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                arr.push(bucket.getKey())
            }
        })

        return arr
    }

    // Return all values in an array
    values() {
        let arr = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                arr.push(bucket.getValue())
            }
        })

        return arr
    }

    // Return all keys with their respective values
    entries() {
        let arr = [];

        this.buckets.forEach((bucket) => {
            if (bucket) {
                let key = bucket.getKey();
                let value = bucket.getValue()
                arr.push([key, value])
            }
        })

        return arr
    }

}

export { HashMap }