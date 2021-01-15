const texto = 'Romário era um excelente jogador,\n mas hoje é um político questionador'

// ^ => start of line or string
// [^] => within a set, it means negation
console.log(texto.match(/^r/gi)) // ^ start of line/string
console.log(texto.match(/r$/gi)) // $ end of line/string

console.log(texto.match(/^r[\s\S]*r$/gi)) // dotall problem - [\s\S] resolved
