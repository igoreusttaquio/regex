const fs = require('fs')

const read = fileName => {
    return fs.readFileSync(`${__dirname}/original/${fileName}`, {encoding: 'utf8'})
}

const write = (fileName, conteudo) => {
    const dirname = `${__dirname}/changed`
    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${fileName}`, conteudo, {encoding: 'utf8'})
}

module.exports = {read, write}
