const portugueseWords = "dia diatonico diafragma media wikipedia bom_dia melodia radial"

console.log(portugueseWords.match(/\bdia\w+/gi)) // \b => word border
console.log(portugueseWords.match(/\w+dia\b/gi))
console.log(portugueseWords.match(/\w*dia\w*/gi))
console.log(portugueseWords.match(/\w+dia\w+/gi))

// Border is not \w, why is [^A-Za-z0-9]... Have a problems with acents!
const palavrasII = "dia diatônico diafragma, mádia wikipédia bom-dia melodia radial"
console.log(palavrasII.match(/\bdia\b/gi))
console.log(palavrasII.match(/(\S*)?dia(\S*)?/gi)) // the comma is considered
console.log(palavrasII.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)/gi))