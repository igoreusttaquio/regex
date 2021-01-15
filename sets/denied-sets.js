/*  ^ denied char(^) inside a sets.
    Contain a different meaning outside the sets.
 */
const text = '1,2,3,4,5,a.b c!d#f'

console.log(text.match(/\D/g)) // All is not a digit
console.log(text.match(/[^0-9]/g)) // All is not a digit