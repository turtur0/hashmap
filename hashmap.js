if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds.")
}


function hash(key){
    let hashCode = code;
    
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
}