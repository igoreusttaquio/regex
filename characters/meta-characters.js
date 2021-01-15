/* What are metacharacters?
   Meta characters are characters
   specials used by regex, such as
   if they were "reserved words" from the regex
   but it contains specific meanings.
   For example: . means all, [] means a set
*/

const text = '1,2,3,4,5,6,a.b c!d?e'

/* When you use the escape character "\"
   what follows is considered a literal value.
   
   For example, the character ". dot", is a metacharacter,
   but when escaped, it behaves like a literal, and no longer
   as a metacharacter. 

   This concept applies to all other metacharacters!
*/
const dotRegex = /\./g

console.log(text.split(dotRegex))

const regexSimbols = /,|\.|\?|!| /g
console.log(text.split(regexSimbols))
