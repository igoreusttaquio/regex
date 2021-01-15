// To define, a class (or sets) of characters, use's []
const numbers = '1,2,3,4,5,6,7,8,9,0'

const pairSets = /[2468]/g
console.log(numbers.match(pairSets))

const text = "Hello, don't feel upset that you didn't go to the party."
console.log(text.match(/n[aãAÃ]o/g))