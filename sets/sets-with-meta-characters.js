const textMetaChars = '.$+*?-'

/* Inside a set, the metacharacter's
   (or most of them) behave like
   a literal string.
*/
console.log(textMetaChars.match(/[.$*?]/g))
