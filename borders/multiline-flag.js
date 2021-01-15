const portugueseText = `
Leo é muito legal
Emanuel foi jogar em Sergipe.
Bianca é casada com Habib
`
console.log(portugueseText.match(/\n/g))
console.log(portugueseText.match(/^(\w).+\1\.?$/gim)) // m => multiline flag
console.log(portugueseText.match(/^(\w)/gim))