const text = "<div>Content 01</div><div>Content 02</div>"

/*By default the quantifiers ARE greedy (greedy) ...
  This means that the expression will try
  get the amount she can according to
  with your expression. 
 */
// Greed testingy...
console.log(text.match(/<div>.+<\/div>/g))
console.log(text.match(/<div>.*<\/div>/g))
console.log(text.match(/<div>.{1,}<\/div>/g))

console.log()

// Lazy testing...
console.log(text.match(/<div>.+?<\/div>/g))
console.log(text.match(/<div>.*?<\/div>/g))
console.log(text.match(/<div>.{1,}?<\/div>/g))