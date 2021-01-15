// The . dot is a joker, valid for one position
const text = '1,2,4,4,5,6,7,8,9,0'
const pointRegex = /1.2/g
console.log(text.match(pointRegex))

const notes = '7.88, 8.4, 10.44, 3.9'
console.log(notes.match(/.\...|..\...|.\../g))


const musicas = "arquivos mp3: musica.mp3, podcast.mp3, audio.mp3, conversa.mp3"
console.log(musicas.match(/\.mp3/g))

const textII = 'a   b'
console.log(textII.match(/a...b/i))
console.log(textII.match(/a\s\s\sb/i))