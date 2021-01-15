const colorApply = (txt, regx, color) => {
    return txt.replace(regx, `<span style="color:#${color}"><b>$1</b></span>`)
}

const files = require('./files.js')
const html = files.read('sourceCode.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let code = html.match(codeRegex)[0]
console.log(html.match(codeRegex)[0])

// Strings...
code = colorApply(code, /(\".*\")/g, 'ce9178')

// Reserved words...
code = colorApply(code, /\b(package|class|static|public|if|else)\b/g, 'd857cf')

// Types...
code = colorApply(code, /\b(void|int)\b/g, '1385e2')

// Multiline comments...
code = colorApply(code, /(\/\*[\s\S]*\*\/)/g, '267703')

// One line comments...
code = colorApply(code, /(\/\/.*\n)/g, '267703')

// console.log(code)

const finalContent = html.replace(codeRegex, code)
files.write('finalContent.html', finalContent)
