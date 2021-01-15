// - Represent the range in a set. Ex: range between [a-z]
const text = 'Why letters exists in this set?'
console.log(text.match(/[a-z]/g))
console.log(text.match(/[i-m]/g))

const textII = '1,3,4,5,6,78,200,234,554'
console.log(textII.match(/[1-9]/g))
const textIII = text + textII
console.log(textIII.match(/[1-9a-z]/gi))// two sets