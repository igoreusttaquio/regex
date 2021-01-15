const texto = '0 1 10 192 234 345 234 1512'
// numbers between 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))