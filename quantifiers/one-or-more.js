const text = "Existe um grande fogo no Brasil, um grande FOGOOO!"
const textII = "There is a big fog in NYC"

/* 
   + => one or more occurrences
   of the character or set that comes before +
*/
const regex = /fogo+/gi

console.log(text.match(regex))
console.log(textII.match(regex))

const textIII = "Os numeros: 123456789"
console.log(textIII.match(/[0-9]/g))
console.log(textIII.match(/[0-9]+/g))
// with shorthands
console.log(textIII.match(/\d/g))
console.log(textIII.match(/\d+/g))
