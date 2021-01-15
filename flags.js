// g - global search
// i - ignore case search

const portugueseText = 'Carlos assinou o abaixo-assinado.'
console.log(portugueseText.match(/C|ab/))
console.log(portugueseText.match(/C|ab/ig))

let search = portugueseText.match(/C|ab/ig)
console.log(typeof search)