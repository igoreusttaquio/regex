/* Shorthands are shortcuts in sets,
   or group of characters.

   For example \d replaces [0-9]
   and \w replaces [a-zA-Z0-9_] 
*/

const mix = '1,2,3,4,5,6,7,8,9,78, A,a,B,b,C,c,z,Z'
console.log(mix.match(/\d/g))
console.log(mix.match(/\w/g))
console.log(mix.match(/\D/g)) // All why not are a number

