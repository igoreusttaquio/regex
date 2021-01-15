function factorial(n) {
    if(n <= 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

// Migrating for arroy functions
let fat = (n) => {
    if(n <= 1) return n
    else return n * fat(n -1)
}

console.log(factorial(5))
console.log(fat(6))
console.log(factorial(15))
console.log(fat(16))
