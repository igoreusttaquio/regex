const passwords = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log(passwords.match(/^.{6,20}$/gm))
console.log(passwords.match(/^(?=.*[A-Z]).{6,20}$/gm))

console.log(passwords.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!^~&$*]).{6,20}$/gm))