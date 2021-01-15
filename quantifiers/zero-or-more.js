const text = "Existe um grande fogo no Brasil, um grande FOGOOO!"
const textII = "There is a big fog in NYC"

/* 
   * => zero or more occurrences
   of the character or set that comes before *
*/
const regex = /fogo*/gi

console.log(text.match(regex))
console.log(textII.match(regex))

