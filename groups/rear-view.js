const text = '<b>Spotlight</b><strong>Emphasis</strong><div>Content</div>'

/* Each group has a rear view mirror,
   the mirrors are represented
   from numbers.
   
   If you are a group you have a rear view mirror,
   if you have more than one group, you have more than
   a rear view.
   
   Example: (group1) \1 - (group2) \2 - (group3) \3
   and so on.
*/
const rearView = /<(\w+)>.*<\/\1>/g
console.log(text.match(rearView))

const textII = 'Lentamente é mente muito lenta.'
const rearViewII = /(lenta)(mente).*\2.*\1\.?/gi
console.log(textII.match(rearViewII))


// The group value can be discarded with the syntax :?
const rearViewRegexIII = /(:?lenta)(mente).*\1/gi // :? does not store the value of the mirror (discards)
console.log(textII.match(rearViewRegexIII))

