const portugueseText = 'João é calmo, mas no transito fica nervoso.'

console.log(portugueseText.match(/[\wÀ-ú]+/gi))

// SPECIAL GROUPS
// Positive lookahead
console.log(portugueseText.match(/[\wÀ-ú]+(?=,)/gi))
console.log(portugueseText.match(/[\wÀ-ú]+(?=\.)/gi))

// Negative lookahead
console.log(portugueseText.match(/[\wÀ-ú]+(?!=\.)/gi))
console.log(portugueseText.match(/[\wÀ-ú]+[\s|\.](?!=,)/gi))