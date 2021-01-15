const portugueseText = `
Lista telefônica:
    - (21) 1234-4534
    - (11) 23434-4433
    - (1)1223-3232
    - 1234-4232
`

console.log(portugueseText.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))