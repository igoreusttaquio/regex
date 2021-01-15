const portugueseText = `
    Lista de colaboradores:
    CPF: 132.221.345-09, EMAIL: joao@email.com, TEL: (11) 2323-4434
    CPF: 222.221.345-09, EMAIL: deise@aol.com, TEL:  44232-4434
    CPF: 333.221.345-09, EMAIL: pirlo@gmail.com.it, TEL: (44) 9403-4434
    CPF: 444.221.345-09, EMAIL: pietra@email.com, TEL: (33) 1123-4434
    CPF: 555.221.345-09, EMAIL: marli@email.com.br, TEL: 1233-4434
    CPF: 667.221.345-09, EMAIL: joao@email.com, TEL: (31) 1244-4434
`

// Take the cpfs
const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g
console.log(portugueseText.match(cpfRegex))

// Take the e-mails
const emailRegex = /\w{1,}@\w{1,}\.\w{1,}\.?\w{2}/g
console.log(portugueseText.match(emailRegex))

// Take the telephones numbers
const telRegex = /\(\d{1,3}\)\s\d+-\d{4,5}|\s?\d+-\d{4}/g
console.log(portugueseText.match(telRegex))