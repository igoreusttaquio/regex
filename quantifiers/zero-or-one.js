const texto = "Existe um grande fogo no Brasil, um grande FOGOOO!"
const textoII = "There is a big fog in NYC"

/* 
   ? => zero or one (optional)
   The character that comes before "?" that is examined
   in this case the "o"
*/
const regex = /fogo?/gi

console.log(texto.match(regex))
console.log(textoII.match(regex))