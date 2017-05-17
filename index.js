var pug = require('pug')

console.log(pug.compile('a #{name}')({ name: 'HieuNV' }))

console.log(pug.renderFile('./templates/test-1.pug'))
