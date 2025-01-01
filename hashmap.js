if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds.")
}


class HashMap {
    constructor() {
        this.buckets = new Array(16);
        this.storedKeys = 0;
        this.loadFactor = 0.75;
        this.capacity = this.buckets.length;
    }

    hash(key) {
        let hashCode = code;
    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds.")
        }

        let hashCode = hash(key);

        if (!this.buckets[key]) {
            
        }


    }
}