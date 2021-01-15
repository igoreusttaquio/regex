const portugueseText = "O joão conseguiu 120 milhões, com os números 6 21 22 34 34 34"
// To DEFINE a quantifier, {n} {n, m} is used
console.log(portugueseText.match(/[0-9]{1,2}/g))
console.log(portugueseText.match(/\d{2}/g))
console.log(portugueseText.match(/[0-9]{1,}/g))

console.log(portugueseText.match(/[a-z]{7}/g))
console.log(portugueseText.match(/[\wõ]{7}/g))