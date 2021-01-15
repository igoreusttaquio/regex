const portugueseText = 'O José simão é muito engraçado... hehehehe'

const group = /(he)+/g

console.log(portugueseText.match(group))

const textII = 'http://www.site.info www.escola.ninja.br google.com'

const urlRegex = /((http:\/\/)?(www)?\.?(\w+)\.?(\w+)?\.?(\w+))/g

console.log(textII.match(urlRegex))

const textIII = 'Supermercado Megamercado Hipermercado Minimercado Mercado'
const supermarketRegex = /(super|mega|hiper|mini)?mercado/gi
console.log(textIII.match(supermarketRegex))

/* NOTE: within a group the group does not exist,
   he "dies". 
 */
textIV = 'Aberto(open) fechado(closed)'
console.log(textIV.match(/[(\w+)]/gi))
console.log(textIV.match(/(\(\w+\))/gi))

/* And the opposite occurs, a set
   it exists within a group. He "survives" 
*/
console.log(textIV.match(/([ABC])/gi))