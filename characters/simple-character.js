const text = '1,2,3,4,5,6,a.b c!d?e'

const commaRegex = /,/

console.log(text.match(commaRegex))
console.log(text.split(commaRegex))
console.log(text.match(/A/g))
console.log(text.match(/A/gi))
console.log(text.match(/a.b c!d/))