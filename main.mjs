import { HashMap } from './hashmap.mjs'

// Initialise tests
const test = new HashMap()
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// Test Overload and Growth Function
test.set('moon', 'silver')

// console.log(test)
// test.remove('apple')
// console.log(test)
// console.log(test.get('apple'))

// console.log(test)
// test.clear()
// console.log(test)

// Test data fetch for keys, values, and all entires including both
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
console.log(test)