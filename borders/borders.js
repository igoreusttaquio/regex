const portugueseText = 'Romário era um excelente jogador,\n mas hoje é um político questionador'

// ^ => start of line or string
// [^] => within a set, it means negation
console.log(portugueseText.match(/^r/gi)) // ^ start of line/string
console.log(portugueseText.match(/r$/gi)) // $ end the line/string

console.log(portugueseText.match(/^r.*r$/gi)) // dotall problem
