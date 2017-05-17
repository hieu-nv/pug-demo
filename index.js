var pug = require('pug')

console.log(pug.compile('a #{name}')({ name: 'HieuNV' }))
